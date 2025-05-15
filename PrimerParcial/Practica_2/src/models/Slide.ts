import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { NavegacionSlide } from './NavegacionSlide';

@Entity()
export class Slide {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    titulo!: string;

    @Column("text")
    contenido!: string;

    @OneToMany(() => NavegacionSlide, (nav) => nav.slide)
    navegaciones!: NavegacionSlide[];

}