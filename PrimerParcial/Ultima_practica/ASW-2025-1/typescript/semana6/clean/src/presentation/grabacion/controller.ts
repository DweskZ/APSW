import { Request, Response } from 'express';
import { CreateGrabacionUseCase } from '../../domain/use-cases/grabacion/create-grabacion.use.case';

export class GrabacionController {
  constructor(private useCase: CreateGrabacionUseCase) {}

  async create(req: Request, res: Response) {
    try {
      const nueva = await this.useCase.execute(req.body);
      res.status(201).json(nueva);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      res.status(500).json({ error: errorMessage });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const resultado = await this.useCase['repo'].findById(id); // acceso directo si no hay otro caso de uso
      if (!resultado) return res.status(404).json({ error: 'Grabación no encontrada' });
      res.status(200).json(resultado);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
      res.status(500).json({ error: errorMessage });
    }
  }
}
