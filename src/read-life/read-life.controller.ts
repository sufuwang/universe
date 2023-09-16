import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReadLifeService } from './read-life.service';
import { CreateReadLifeDto } from './dto/create-read-life.dto';
import { UpdateReadLifeDto } from './dto/update-read-life.dto';

@Controller('read-life')
export class ReadLifeController {
  constructor(private readonly readLifeService: ReadLifeService) {}

  @Post()
  create(@Body() createReadLifeDto: CreateReadLifeDto) {
    return this.readLifeService.create(createReadLifeDto);
  }

  @Get()
  findAll() {
    return this.readLifeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.readLifeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReadLifeDto: UpdateReadLifeDto) {
    return this.readLifeService.update(+id, updateReadLifeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.readLifeService.remove(+id);
  }
}
