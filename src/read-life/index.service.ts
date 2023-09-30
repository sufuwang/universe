import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ImageFeedEntity } from './entities/image-feed.entity';
import { Repository } from 'typeorm';
import { ImageFeedDto } from './dto/image-feed.dto';

const parseFeedItem = (item: ImageFeedEntity): ImageFeedDto => {
  return {
    ...item,
    tags: JSON.parse(item.tags),
    images: JSON.parse(item.images),
  };
};

@Injectable()
export class ReadLifeService {
  @InjectRepository(ImageFeedEntity)
  private imageFeedDB: Repository<ImageFeedEntity>;

  async getViewCount(id: number) {
    const item = await this.imageFeedDB.findOneBy({ id });
    return item ? item.viewCount : -1;
  }

  async addViewCount(id: number) {
    if (id === undefined) {
      return null;
    }
    const item = await this.imageFeedDB.findOneBy({ id });
    return this.imageFeedDB
      .createQueryBuilder()
      .update(ImageFeedEntity)
      .set({ viewCount: item.viewCount + 1 })
      .where('id = :id', { id })
      .execute();
  }

  async getAllTag() {
    return [
      ...new Set(
        (await this.imageFeedDB.find())
          .map((item) => JSON.parse(item.tags))
          .flat(),
      ),
    ];
  }

  async getFeed(id: number) {
    if (id === undefined) {
      return (await this.imageFeedDB.find()).map(parseFeedItem);
    }
    const item = await this.imageFeedDB.findOneBy({ id });
    if (item?.id >= 0) {
      this.imageFeedDB.update({ id }, { viewCount: item.viewCount + 1 });
      return parseFeedItem(item);
    }
    return {};
  }

  async createFeed(body: ImageFeedDto) {
    const feed = new ImageFeedEntity();
    Object.keys(body).forEach((key) => {
      const d = body[key];
      feed[key] = typeof d === 'string' ? d : JSON.stringify(body[key]);
    });
    feed.viewCount = 1;
    return this.imageFeedDB.save(feed);
  }
}
