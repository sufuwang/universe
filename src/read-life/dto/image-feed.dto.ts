import { IsNotEmpty } from 'class-validator';

export class ImageFeedDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  tags: string[];

  @IsNotEmpty()
  images: string[];

  @IsNotEmpty()
  content: string;
}
