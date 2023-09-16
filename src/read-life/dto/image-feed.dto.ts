import { IsNotEmpty } from 'class-validator';

export class ImageFeedDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  tag: string[];

  @IsNotEmpty()
  image: string[];

  @IsNotEmpty()
  desc: string;
}
