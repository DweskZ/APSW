import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { user } from "./user";

@Entity()
export class view{
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    vista!: string;
    @ManyToOne(() => user, (user:user) => user.views)
    user!: user;    
}