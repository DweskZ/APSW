import { PartialType } from '@nestjs/mapped-types';
import { CreateNotaSlideDto } from './create-nota-slide.dto';

export class UpdateNotaSlideDto extends PartialType(CreateNotaSlideDto) {}
