import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReadLifeModule } from './read-life/read-life.module';

@Module({
  imports: [ReadLifeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
