import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Calificacion } from './entities/calificacion.entity';

@Injectable()
export class CalificacionService {
  constructor(
    @InjectRepository(Calificacion)
    private repo: Repository<Calificacion>,
  ) {}

  create(dto: Partial<Calificacion>) {
    const ent = this.repo.create(dto);
    return this.repo.save(ent);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: string) {
    return this.repo.findOneBy({ id });
  }

  update(id: string, dto: Partial<Calificacion>) {
    return this.repo.save({ id, ...dto });
  }

  remove(id: string) {
    return this.repo.delete(id);
  }
}
