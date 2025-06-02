// domain/repositories/grabacion.repository.ts
import { GrabacionEntity } from '../../domain/entities/grabacion.entity';

export interface GrabacionRepository {
  save(grabacion: GrabacionEntity): Promise<GrabacionEntity>;
  findById(id: number): Promise<GrabacionEntity | null>;
  findAll(): Promise<GrabacionEntity[]>;
  delete(id: number): Promise<void>;
}
