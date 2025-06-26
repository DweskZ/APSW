import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly repo: Repository<Usuario>,
  ) {}

  /* CREATE */
  create(dto: CreateUsuarioDto) {
    const usuario = this.repo.create(dto);
    return this.repo.save(usuario);
  }

  /* READ ALL */
  findAll() {
    return this.repo.find();
  }

  /* READ ONE */
  async findOne(id: number) {
    const usuario = await this.repo.findOne({ where: { id } });
    if (!usuario) throw new NotFoundException(`Usuario #${id} no existe`);
    return usuario;
  }

  /* UPDATE */
  async update(id: number, dto: UpdateUsuarioDto) {
    await this.findOne(id);          // verifica existencia
    await this.repo.update(id, dto); // aplica cambios parciales
    return this.findOne(id);         // devuelve objeto actualizado
  }

  /* DELETE */
  async remove(id: number) {
    const res = await this.repo.delete(id);
    if (!res.affected) throw new NotFoundException(`Usuario #${id} no existe`);
    return { deleted: true };
  }
}
