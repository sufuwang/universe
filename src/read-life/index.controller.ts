import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ReadLifeService } from './index.service';
import { ImageFeedDto } from './dto/image-feed.dto';

@Controller('life')
export class ReadLifeController {
  constructor(private readonly service: ReadLifeService) {}

  @Get('/viewCount')
  async getViewCount(@Query('id') id: number) {
    return this.service.getViewCount(id);
  }

  @Patch('/viewCount')
  async addViewCount(@Query('id') id: number) {
    return this.service.addViewCount(id);
  }

  @Get('/tags')
  async getAllTag() {
    return this.service.getAllTag();
  }

  @Get('/feed')
  async getFeed(@Query('id') id: number) {
    return this.service.getFeed(id);
  }

  @Post('/feed')
  async createFeed(@Body() body: ImageFeedDto) {
    if (!body.title) {
      return null;
    }
    return this.service.createFeed(body);
  }
}
