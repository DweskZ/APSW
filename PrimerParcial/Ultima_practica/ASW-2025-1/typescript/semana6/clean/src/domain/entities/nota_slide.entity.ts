
export class NotaSlideEntity {
    constructor(
        public id: number,
        public grabacionId: number,
        public slideId: number,
        public contenido: string,
        public timestamp?: number
    ) {}

    static crearSinId(data: Omit<NotaSlideEntity, 'id'>): NotaSlideEntity {
        return new NotaSlideEntity(
            0,
            data.grabacionId,
            data.slideId,
            data.contenido,
            data.timestamp
        );
    }
}