import { GrabacionEntity } from '../../domain/entities/grabacion.entity';
import { GrabacionRepository } from '../../domain/repositories/grabacion.repository';
import { GrabacionSequelize } from '../../data/sequelize/mappers/grabacion.mapper';
import { sequelize } from '../../data/sequelize/sequelize.config';

export class GrabacionSequelizeDatasource implements GrabacionRepository {
  constructor() {
    sequelize.authenticate()
      .then(() => console.log('Sequelize conectado'))
      .catch((err) => console.error('Error al conectar con Sequelize', err));
  }

  async save(entity: GrabacionEntity): Promise<GrabacionEntity> {
    const data = GrabacionSequelize.fromDomain(entity);
    const created = await GrabacionSequelize.create(data);
    return created.toDomain();
  }

  async findById(id: number): Promise<GrabacionEntity | null> {
    const found = await GrabacionSequelize.findByPk(id);
    return found ? found.toDomain() : null;
  }

  async findAll(): Promise<GrabacionEntity[]> {
    const list = await GrabacionSequelize.findAll();
    return list.map(g => g.toDomain());
  }

  async delete(id: number): Promise<void> {
    await GrabacionSequelize.destroy({ where: { id } });
  }
}
