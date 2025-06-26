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
import { GrabacionService } from './grabacion.service';
import { CreateGrabacionDto } from './dto/create-grabacion.dto';
import { UpdateGrabacionDto } from './dto/update-grabacion.dto';

@Controller('grabaciones')   // prefijo 'api/v1' viene de main.ts
export class GrabacionController {
  constructor(private readonly grabacionService: GrabacionService) {}

  @Post()
  create(@Body() dto: CreateGrabacionDto) {
    return this.grabacionService.create(dto);
  }

  @Get()
  findAll() {
    return this.grabacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.grabacionService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateGrabacionDto,
  ) {
    return this.grabacionService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.grabacionService.remove(id);
  }
}
