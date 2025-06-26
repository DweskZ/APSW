import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { NotaSlideService } from './nota-slide.service';
import { CreateNotaSlideDto } from './dto/create-nota-slide.dto';
import { UpdateNotaSlideDto } from './dto/update-nota-slide.dto';

@Controller('nota-slide')     
export class NotaSlideController {
  constructor(private readonly notaSlideService: NotaSlideService) {}

  @Post()
  create(@Body() dto: CreateNotaSlideDto) {
    return this.notaSlideService.create(dto);
  }

  @Get()
  findAll() {
    return this.notaSlideService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.notaSlideService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateNotaSlideDto,
  ) {
    return this.notaSlideService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.notaSlideService.remove(id);
  }
}
