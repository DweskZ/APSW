// domain/use-cases/grabacion/create-grabacion.use-case.ts
import { GrabacionRepository } from '../../repositories/grabacion.repository';
import { GrabacionEntity } from '../../entities/grabacion.entity';
import { CreateGrabacionDTO } from '../../dtos/grabacion/create-grabacion.dto';

export class CreateGrabacionUseCase {
  constructor(private repo: GrabacionRepository) {}

  async execute(dto: CreateGrabacionDTO): Promise<GrabacionEntity> {
    const grabacion = GrabacionEntity.crearSinId({
      ...dto,
      navegaciones: [], // agrega la propiedad faltante
    });
    return await this.repo.save(grabacion);
  }
}
