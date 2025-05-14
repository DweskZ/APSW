import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Grabacion } from './Grabacion'; 

@Entity()
export class Feedback {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Grabacion, (grabacion) => grabacion.feedbacks)
    grabacion: Grabacion;

    @Column("text")
    contenido: string;
}