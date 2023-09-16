import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ImageFeedEntity } from './entities/image-feed.entity';
import { Repository } from 'typeorm';
import { ImageFeedDto } from './dto/image-feed.dto';

@Injectable()
export class ReadLifeService {
  @InjectRepository(ImageFeedEntity)
  private imageFeedDB: Repository<ImageFeedEntity>;

  async getViewCount(id: number) {
    const item = await this.imageFeedDB.findOneBy({ id });
    return item ? item.viewCount : -1;
  }

  async getFeed(id: number) {
    if (id === undefined) {
      return this.imageFeedDB.find();
    }
    const item = await this.imageFeedDB.findOneBy({ id });
    if (item?.id >= 0) {
      this.imageFeedDB.update({ id }, { viewCount: item.viewCount + 1 });
      return item;
    }
    return {};
  }

  async createFeed(body: ImageFeedDto) {
    const feed = new ImageFeedEntity();
    Object.keys(body).forEach((key) => (feed[key] = body[key]));
    return this.imageFeedDB.save(feed);
  }
}
