import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
@Entity()
export class Usuario {
  @PrimaryGeneratedColumn() id: number;
  @Column() nombre: string;
  @Column({ unique: true }) email: string;
  @Column({ default: 'estudiante' }) rol: string;
  @CreateDateColumn() createdAt: Date;
}
