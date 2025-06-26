import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { NotaSlide } from './entities/nota-slide.entity';
import { CreateNotaSlideDto } from './dto/create-nota-slide.dto';
import { UpdateNotaSlideDto } from './dto/update-nota-slide.dto';

@Injectable()
export class NotaSlideService {
  constructor(
    @InjectRepository(NotaSlide)
    private readonly repo: Repository<NotaSlide>,
  ) {}

  create(dto: CreateNotaSlideDto) {
    return this.repo.save(this.repo.create(dto));
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    const nota = await this.repo.findOne({ where: { id } });
    if (!nota) throw new NotFoundException(`NotaSlide #${id} no existe`);
    return nota;
  }

  async update(id: number, dto: UpdateNotaSlideDto) {
    await this.findOne(id);
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const res = await this.repo.delete(id);
    if (!res.affected) throw new NotFoundException(`NotaSlide #${id} no existe`);
    return { deleted: true };
  }
}
