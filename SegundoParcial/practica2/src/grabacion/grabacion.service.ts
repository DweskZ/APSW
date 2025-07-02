import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Grabacion } from './entities/grabacion.entity';
import { CreateGrabacionInput } from './dto/create-grabacion.input';
import { UpdateGrabacionInput } from './dto/update-grabacion.input';

@Injectable()
export class GrabacionService {
  constructor(
    @InjectRepository(Grabacion)
    private readonly grabacionRepository: Repository<Grabacion>,
  ) {}

async create(createGrabacionInput: CreateGrabacionInput): Promise<Grabacion> {
  const nuevaGrabacion = this.grabacionRepository.create({
    ...createGrabacionInput,
    fecha: new Date(createGrabacionInput.fecha), // 👈 transforma string a Date
  });
  return this.grabacionRepository.save(nuevaGrabacion);
}
 

  async findAll(): Promise<Grabacion[]> {
    return this.grabacionRepository.find();
  }

  async findOne(id: string): Promise<Grabacion> {
    const grabacion = await this.grabacionRepository.findOne({ where: { id } });
    if (!grabacion) throw new NotFoundException(`Grabación con ID ${id} no encontrada`);
    return grabacion;
  }

async update(id: string, updateGrabacionInput: UpdateGrabacionInput): Promise<Grabacion> {
  const grabacion = await this.grabacionRepository.preload(updateGrabacionInput);
  if (!grabacion) {
    throw new NotFoundException(`Grabación con ID ${id} no encontrada`);
  }
  return this.grabacionRepository.save(grabacion);
}


  async remove(id: string): Promise<Grabacion> {
    const grabacion = await this.findOne(id);
    await this.grabacionRepository.remove(grabacion);
    return grabacion;
  }
}
