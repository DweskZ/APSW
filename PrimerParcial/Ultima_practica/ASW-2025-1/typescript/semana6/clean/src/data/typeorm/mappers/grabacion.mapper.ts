import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import { GrabacionEntity } from '../../../domain/entities/grabacion.entity';

@Entity('grabaciones')
export class GrabacionTypeOrm {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    usuario_id!: number;

    @Column()
    presentacion_id!: number;

    @Column()
    archivo_audio!: string;

    @CreateDateColumn()
    fecha_grabacion!: Date;

    @Column()
    nombre_archivo!: string;

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

    static fromDomain(grabacion: GrabacionEntity): GrabacionTypeOrm {
        const grabacionOrm = new GrabacionTypeOrm();
        grabacionOrm.id = grabacion.id;
        grabacionOrm.usuario_id = grabacion.usuarioId;
        grabacionOrm.presentacion_id = grabacion.presentacionId;
        grabacionOrm.archivo_audio = grabacion.archivoAudio;
        grabacionOrm.fecha_grabacion = grabacion.fechaGrabacion;
        grabacionOrm.nombre_archivo = grabacion.nombreArchivo;
        return grabacionOrm;
    }
    }
