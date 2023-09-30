import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ResourceService } from './resource.service';
import { FileInterceptor } from '@nestjs/platform-express';
import * as multer from 'multer';

@Controller('resource')
export class ResourceController {
  constructor(private readonly service: ResourceService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: multer.diskStorage({
        destination: (req, file, cb) => {
          cb(
            null,
            '/Users/sufuwang/Downloads/Code/universe/publics/' +
              file.mimetype.split('/')[0],
          );
        },
        filename: (req, file, cb) => {
          cb(null, file.originalname);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.service.save(file);
  }
}
