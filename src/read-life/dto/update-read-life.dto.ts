import { PartialType } from '@nestjs/mapped-types';
import { CreateReadLifeDto } from './create-read-life.dto';

export class UpdateReadLifeDto extends PartialType(CreateReadLifeDto) {}
