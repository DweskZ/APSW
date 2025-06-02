import { Request, Response } from 'express';
import { SerieService } from '../services/SerieService';
import { CreateSerieDTO, UpdateSerieDTO } from '../models/SerieDTO';



export class SerieController {
    private serieService = new SerieService();


    createSerie = async (req: Request, res: Response): Promise<void> => {
        try {
            const createSerieDTO: CreateSerieDTO = req.body; 
            if (! createSerieDTO.name) {
                res.status(400).json({ message: 'Serie name is required' });
                return;
            }
            const newSerie = await this.serieService.createSerie(createSerieDTO); 
            res.status(201).json(newSerie); 
        }

            catch (error: any) {
            if (error.code === '23505') { // Unique constraint violation for name
                res.status(409).json({ message: 'Serie name already exists' });
            
            } else {
                res.status(500).json({ message: 'Error creating serie', error: error.message });
            } 
        }
    };


    getAllSeries = async (req: Request, res: Response): Promise<void> => {
    try {
      const series = await this.serieService.getAllSerie();
      res.status(200).json(series);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching series', error: (error as Error).message });
    }
};


    getSerieById = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            res.status(400).json({ message: 'Invalid serie ID' });
            return;
        }
        const serie = await this.serieService.getSerieById(id);
        if (serie) {
            res.status(200).json(serie);
        } else {
            res.status(404).json({ message: 'Serie not found' });
        }
        }
    catch (error) {
        res.status(500).json({ message: 'Error fetching serie', error: (error as Error).message });
    }
    };

    updateSerie = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            res.status(400).json({ message: 'Invalid serie ID' });
            return;
        }
        const updateSerieDTO: UpdateSerieDTO = req.body;
        if (Object.keys(updateSerieDTO).length === 0) {
            res.status(400).json({ message: 'No update data provided' });
            return;
        }
        const updatedSerie = await this.serieService.updateSerie(id, updateSerieDTO);
        if (updatedSerie) {
            res.status(200).json(updatedSerie);
        } else {
            res.status(404).json({ message: 'Serie not found' });
        }
    } catch (error: any) {
        if (error.code === '23505') { // Unique constraint violation for name
            res.status(409).json({ message: 'Serie name already exists' });
        } else {
            res.status(500).json({ message: 'Error updating serie', error: error.message });
        }
    }
    }

    deleteSerie = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            res.status(400).json({ message: 'Invalid serie ID' });
            return;
        }
        const success = await this.serieService.deleteSerie(id);
        if (success) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Serie not found or could not be deleted' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting serie', error: (error as Error).message });
    }
    }
}
