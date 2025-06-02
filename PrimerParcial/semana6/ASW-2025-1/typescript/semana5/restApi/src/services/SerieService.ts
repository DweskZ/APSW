import { Serie } from '../models/serie';
import { CreateSerieDTO, UpdateSerieDTO } from '../models/SerieDTO';
import { AppDataSource } from '../database/database';


export class SerieService {
    private serieRepository = AppDataSource.getRepository(Serie);

    async createSerie(data: CreateSerieDTO): Promise<Serie> {
        const newSerie = this.serieRepository.create(data);
        return this.serieRepository.save(newSerie);
    }


    async getAllSerie(): Promise<Serie[]> {
        return this.serieRepository.find();
    }

    async getSerieById(id: number): Promise<Serie | null> {
        return this.serieRepository.findOne({ where: { id: BigInt(id) } });
    }

    async updateSerie(id: number, data: UpdateSerieDTO): Promise<Serie | null> {
        const serie = await this.getSerieById(id);
        if (!serie) return null;

        this.serieRepository.merge(serie, data);
        return this.serieRepository.save(serie);
    }

    async deleteSerie(id: number): Promise<boolean> {
        const result = await this.serieRepository.delete(String(id));
        return result.affected !== null && result.affected !== undefined && result.affected > 0;
    }



}
