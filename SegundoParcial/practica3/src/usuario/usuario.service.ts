import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private repo: Repository<Usuario>,
  ) {}

  /** Crear un nuevo usuario */
  create(dto: Partial<Usuario>) {
    const ent = this.repo.create(dto);
    return this.repo.save(ent);
  }

  /** Listar todos los usuarios */
  findAll() {
    return this.repo.find();
  }

  /** Obtener un usuario por ID */
  findOne(id: string) {
    return this.repo.findOneBy({ id });
  }

  /** Actualizar un usuario existente */
  update(id: string, dto: Partial<Usuario>) {
    return this.repo.save({ id, ...dto });
  }

  /** Eliminar un usuario */
  remove(id: string) {
    return this.repo.delete(id);
  }
}
