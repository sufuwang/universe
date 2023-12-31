import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReadLifeModule } from './read-life/index.module';
import { ImageFeedEntity } from './read-life/entities/image-feed.entity';
import { ResourceModule } from './resource/resource.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      // host: '192.168.12.40',
      host: 'mysql-container',
      port: 3306,
      username: 'root',
      password: 'Wo123456',
      database: 'readLife',
      synchronize: true,
      logging: false,
      entities: [ImageFeedEntity],
      poolSize: 10,
      connectorPackage: 'mysql2',
      extra: {
        authPlugin: 'sha256_password',
      },
    }),
    ReadLifeModule,
    ResourceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
