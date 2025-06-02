// domain/dtos/grabacion/create-grabacion.dto.ts
export interface CreateGrabacionDTO {
  usuarioId: number;
  presentacionId: number;
  archivoAudio: string;
  fechaGrabacion: Date;
  nombreArchivo: string;
}
