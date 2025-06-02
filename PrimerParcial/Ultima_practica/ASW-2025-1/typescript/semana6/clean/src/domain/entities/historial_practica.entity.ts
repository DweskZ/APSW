
export class HistorialPracticaEntity {
    constructor(
        public id: number,
        public grabacionId: number,
        public duracionTotal: number,
        public fechaInicio: Date,
        public fechaFin: Date,
        public finalizado: boolean
    ) {}

    static crearSinId(data: Omit<HistorialPracticaEntity, 'id'>): HistorialPracticaEntity {
        return new HistorialPracticaEntity(
            0,
            data.grabacionId,
            data.duracionTotal,
            data.fechaInicio,
            data.fechaFin,
            data.finalizado
        );
    }
}