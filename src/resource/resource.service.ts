import { Injectable } from '@nestjs/common';

@Injectable()
export class ResourceService {
  save(file: Express.Multer.File) {
    return {
      path: file.path.split('/').slice(-2).join('/'),
    };
  }
}
