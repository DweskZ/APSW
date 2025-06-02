

export class NavegacionSlideEntity {
    constructor(
        public id: number,
        public grabacionId: number,
        public slideId: number,
        public timestamp: number,
        public tipoNavegacion?: string
    ) {}
    
  static crearSinId(data: Omit<NavegacionSlideEntity, 'id'>): NavegacionSlideEntity {
    return new NavegacionSlideEntity(
      0,
      data.grabacionId,
      data.slideId,
      data.timestamp,
      data.tipoNavegacion
    );
  }
}