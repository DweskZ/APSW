import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()

export class ParametroIdeal {
        @PrimaryGeneratedColumn()
        id: number;

        @Column()
        nombre: string;

        @Column("float")
        valorIdeal: number;
    }