import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { view } from "./view";

@Entity()
export class user{
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    nombre!: string;
    @Column()
    correo!: string;
    @OneToMany(() => view, (view:view) => view.user)
    views!: view[]; // Relación uno a muchos con la entidad view
}