import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../sequelize.config';
import { GrabacionEntity } from '../../../domain/entities/grabacion.entity';

export class GrabacionSequelize extends Model {
  declare id: number;
  declare usuario_id: number;
  declare presentacion_id: number;
  declare archivo_audio: string;
  declare fecha_grabacion: Date;
  declare nombre_archivo: string;

  toDomain(): GrabacionEntity {
    return new GrabacionEntity(
      this.id,
      this.usuario_id,
      this.presentacion_id,
      this.archivo_audio,
      this.fecha_grabacion,
      this.nombre_archivo
    );
  }

  static fromDomain(entity: GrabacionEntity): any {
    return {
      usuario_id: entity.usuarioId,
      presentacion_id: entity.presentacionId,
      archivo_audio: entity.archivoAudio,
      fecha_grabacion: entity.fechaGrabacion,
      nombre_archivo: entity.nombreArchivo,
    };
  }
}

GrabacionSequelize.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    usuario_id: DataTypes.INTEGER,
    presentacion_id: DataTypes.INTEGER,
    archivo_audio: DataTypes.STRING,
    fecha_grabacion: DataTypes.DATE,
    nombre_archivo: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'Grabacion',
    tableName: 'grabaciones',
    timestamps: false,
  }
);
