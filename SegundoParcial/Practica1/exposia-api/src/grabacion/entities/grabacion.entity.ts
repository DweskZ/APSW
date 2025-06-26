import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Grabacion {
  @PrimaryGeneratedColumn() id: number;
  @Column() titulo: string;
  @Column() urlAudio: string;
  @Column('int') duracionSeg: number;
  @CreateDateColumn() createdAt: Date;
}
