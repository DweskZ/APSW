
import { NavegacionSlideEntity } from './navegacion_slide.entity';

  export class GrabacionEntity {
    constructor(
        public id: number,
        public usuarioId: number,
        public presentacionId: number,
        public archivoAudio: string,
        public fechaGrabacion: Date,
        public nombreArchivo: string,
        public navegaciones: NavegacionSlideEntity[] = []
    ) {}
      static crearSinId(data: Omit<GrabacionEntity, 'id'>): GrabacionEntity {
    return new GrabacionEntity(0, data.usuarioId, data.presentacionId, data.archivoAudio, data.fechaGrabacion, data.nombreArchivo, data.navegaciones);
  }
  }
