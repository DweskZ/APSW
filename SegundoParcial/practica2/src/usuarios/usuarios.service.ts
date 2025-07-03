import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioInput } from './dto/create-usuario.input';
import { UpdateUsuarioInput } from './dto/update-usuario.input';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioInput: CreateUsuarioInput): Promise<Usuario> {
    const nuevoUsuario = this.usuarioRepository.create(createUsuarioInput);
    return await this.usuarioRepository.save(nuevoUsuario);
  }

  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async findOne(id: string): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({ where: { id } });
    if (!usuario) throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    return usuario;
  }

  async update(id: string, updateUsuarioInput: UpdateUsuarioInput): Promise<Usuario> {
  const usuario = await this.usuarioRepository.preload(updateUsuarioInput);
  if (!usuario) throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
  return this.usuarioRepository.save(usuario);
}


  async remove(id: string): Promise<Usuario> {
  const usuario = await this.findOne(id);
  const eliminado = { ...usuario }; // copia segura antes de eliminar
  await this.usuarioRepository.remove(usuario);
  return eliminado;
}
}
