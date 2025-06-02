import { Router } from 'express';
import { GrabacionController } from './controller';
import { CreateGrabacionUseCase } from '../../../src/domain/use-cases/grabacion/create-grabacion.use.case';
import { GrabacionTypeOrmDatasourceImpl } from '../../../src/infrastructure/datasource/grabacion.typeorm.datasource';

export class GrabacionRoutes {

  static get routes(): Router {
    const router = Router();

    // Inyección de dependencias
    const repo = new GrabacionTypeOrmDatasourceImpl();
    const useCase = new CreateGrabacionUseCase(repo);
    const controller = new GrabacionController(useCase);

    // Endpoints
    router.post('/', (req, res) => controller.create(req, res));
    router.get('/:id', (req, res) => controller.findById(req, res));

    return router;
  }

}
