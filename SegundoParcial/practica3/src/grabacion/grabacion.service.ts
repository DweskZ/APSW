import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Grabacion } from './entities/grabacion.entity';

@Injectable()
export class GrabacionService {
  constructor(
    @InjectRepository(Grabacion)
    private repo: Repository<Grabacion>,
  ) {}

  /** Crear una nueva grabación */
  create(dto: Partial<Grabacion>) {
    const ent = this.repo.create(dto);
    return this.repo.save(ent);
  }

  /** Listar todas las grabaciones */
  findAll() {
    return this.repo.find();
  }

  /** Obtener una grabación por ID */
  findOne(id: string) {
    return this.repo.findOneBy({ id });
  }

  /** Actualizar una grabación existente */
  update(id: string, dto: Partial<Grabacion>) {
    return this.repo.save({ id, ...dto });
  }

  /** Eliminar una grabación */
  remove(id: string) {
    return this.repo.delete(id);
  }
}
