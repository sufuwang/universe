import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReadLifeService } from './index.service';
import { ReadLifeController } from './index.controller';
import { ImageFeedEntity } from './entities/image-feed.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ImageFeedEntity])],
  controllers: [ReadLifeController],
  providers: [ReadLifeService],
})
export class ReadLifeModule {}
