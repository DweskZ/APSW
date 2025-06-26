import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class NotaSlide {
  @PrimaryGeneratedColumn() id: number;
  @Column('int') slide: number;
  @Column('text') contenido: string;
  @Column('int') timestampSeg: number;
  @CreateDateColumn() createdAt: Date;
}
