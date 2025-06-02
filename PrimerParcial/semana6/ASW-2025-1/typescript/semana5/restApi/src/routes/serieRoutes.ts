import { Router } from 'express';
import { SerieController } from '../controllers/SerieController';

const router = Router();
const seriecontroller = new SerieController();

router.post('/', seriecontroller.createSerie);
router.get('/', seriecontroller.getAllSeries);
router.get('/:id', seriecontroller.getSerieById);
router.put('/:id', seriecontroller.updateSerie);
router.delete('/:id', seriecontroller.deleteSerie);

export default router; 