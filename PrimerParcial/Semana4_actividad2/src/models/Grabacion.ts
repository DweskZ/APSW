import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import { Feedback }  from "./Feedback";
import { NavegacionSlide } from "./NavegacionSlide"
 

@Entity()
export class Grabacion { 
    @PrimaryGeneratedColumn()
    id: number;

    @Column() 
    usuarioId: number;

    @Column()
    presentacionId: number;

    @Column("timestamp")
    fecha: Date; 

    @OneToMany(() => Feedback, (feedback) => feedback.grabacion)
    feedbacks: Feedback[];

    @OneToMany(() => NavegacionSlide, (nav) => nav.grabacion)
    navegaciones = NavegacionSlide[];
}

