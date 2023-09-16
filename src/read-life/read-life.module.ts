import { Module } from '@nestjs/common';
import { ReadLifeService } from './read-life.service';
import { ReadLifeController } from './read-life.controller';

@Module({
  controllers: [ReadLifeController],
  providers: [ReadLifeService]
})
export class ReadLifeModule {}
