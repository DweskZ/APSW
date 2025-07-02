import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Calificacion } from './entities/calificacion.entity';
import { CreateCalificacionInput } from './dto/create-calificacion.input';
import { UpdateCalificacionInput } from './dto/update-calificacion.input';

@Injectable()
export class CalificacionService {
  constructor(
    @InjectRepository(Calificacion)
    private readonly calificacionRepository: Repository<Calificacion>,
  ) {}

  async create(createCalificacionInput: CreateCalificacionInput): Promise<Calificacion> {
    const nuevaCalificacion = this.calificacionRepository.create(createCalificacionInput);
    return this.calificacionRepository.save(nuevaCalificacion);
  }

  async findAll(): Promise<Calificacion[]> {
    return this.calificacionRepository.find();
  }

  async findOne(id: string): Promise<Calificacion> {
    const calificacion = await this.calificacionRepository.findOne({ where: { id } });
    if (!calificacion) throw new NotFoundException(`Calificación con ID ${id} no encontrada`);
    return calificacion;
  }

async update(id: string, updateCalificacionInput: UpdateCalificacionInput): Promise<Calificacion> {
  const calificacion = await this.calificacionRepository.preload(updateCalificacionInput);
  if (!calificacion) {
    throw new NotFoundException(`Calificación con ID ${id} no encontrada`);
  }
  return this.calificacionRepository.save(calificacion);
}


  async remove(id: string): Promise<Calificacion> {
    const calificacion = await this.findOne(id);
    await this.calificacionRepository.remove(calificacion);
    return calificacion;
  }
}