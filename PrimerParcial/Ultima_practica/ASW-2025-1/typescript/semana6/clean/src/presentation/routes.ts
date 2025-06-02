import { Router } from 'express';

import { TodoRoutes } from './todos/routes';
import { GrabacionRoutes } from './grabacion/routes';



export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/todos', TodoRoutes.routes );
    router.use('/api/grabaciones', GrabacionRoutes.routes );



    return router;
  }


}

