import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Grabacion } from './Grabacion'; 

@Entity()
export class Feedback {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Grabacion, (grabacion: Grabacion) => grabacion.feedbacks)
    grabacion!: Grabacion;

    @Column("text")
    contenido!: string;
}