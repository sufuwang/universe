import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  // app.useStaticAssets('/Users/sufuwang/Downloads/Code/universe/publics', {
  app.useStaticAssets('./publics', {
    prefix: '/public',
  });
  await app.listen(3000);
}
bootstrap();
