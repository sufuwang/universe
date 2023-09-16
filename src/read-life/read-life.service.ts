import { Injectable } from '@nestjs/common';
import { CreateReadLifeDto } from './dto/create-read-life.dto';
import { UpdateReadLifeDto } from './dto/update-read-life.dto';

@Injectable()
export class ReadLifeService {
  create(createReadLifeDto: CreateReadLifeDto) {
    return 'This action adds a new readLife';
  }

  findAll() {
    return `This action returns all readLife`;
  }

  findOne(id: number) {
    return `This action returns a #${id} readLife`;
  }

  update(id: number, updateReadLifeDto: UpdateReadLifeDto) {
    return `This action updates a #${id} readLife`;
  }

  remove(id: number) {
    return `This action removes a #${id} readLife`;
  }
}
