import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Grabacion } from "./Grabacion";
import { Slide } from "./Slide"

@Entity()
export class NavegacionSlide {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Grabacion, (grabacion) => grabacion.navegaciones)
    grabacion!: Grabacion;

    @ManyToOne(() => Slide, (slide) => slide.navegaciones)
    slide!: Slide;

    @Column("timestamp")
    tiempoAcceso!: Date;

}