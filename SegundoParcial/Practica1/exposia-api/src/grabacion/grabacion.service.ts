import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Grabacion } from './entities/grabacion.entity';
import { CreateGrabacionDto } from './dto/create-grabacion.dto';
import { UpdateGrabacionDto } from './dto/update-grabacion.dto';

@Injectable()
export class GrabacionService {
  constructor(
    @InjectRepository(Grabacion)
    private readonly repo: Repository<Grabacion>,
  ) {}

  create(dto: CreateGrabacionDto) {
    return this.repo.save(this.repo.create(dto));
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    const grab = await this.repo.findOne({ where: { id } });
    if (!grab) throw new NotFoundException(`Grabación #${id} no existe`);
    return grab;
  }

  async update(id: number, dto: UpdateGrabacionDto) {
    await this.findOne(id);
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const res = await this.repo.delete(id);
    if (!res.affected) throw new NotFoundException(`Grabación #${id} no existe`);
    return { deleted: true };
  }
}
