import { AppDataSource } from '../../data/typeorm/typeorm.config';
import { GrabacionTypeOrm } from '../../data/typeorm/mappers/grabacion.mapper';
import { GrabacionEntity } from '../../domain/entities/grabacion.entity';
import { GrabacionRepository } from '../../domain/repositories/grabacion.repository';

export class GrabacionTypeOrmDatasourceImpl implements GrabacionRepository {
  private repository = AppDataSource.getRepository(GrabacionTypeOrm);

  constructor() {
    if (!AppDataSource.isInitialized) {
      AppDataSource.initialize()
        .then(() => console.log('Grabacion DataSource Initialized'))
        .catch(err => {
          console.error('Error initializing Grabacion DataSource', err);
          throw err;
        });
    }
  }

  async save(entity: GrabacionEntity): Promise<GrabacionEntity> {
    const orm = GrabacionTypeOrm.fromDomain(entity);
    const saved = await this.repository.save(orm);
    return saved.toDomain();
  }

  async findById(id: number): Promise<GrabacionEntity | null> {
    const found = await this.repository.findOneBy({ id });
    return found ? found.toDomain() : null;
  }

  async findAll(): Promise<GrabacionEntity[]> {
    const all = await this.repository.find();
    return all.map(item => item.toDomain());
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
