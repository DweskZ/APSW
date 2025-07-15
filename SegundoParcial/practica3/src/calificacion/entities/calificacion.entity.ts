import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('calificaciones')
export class Calificacion {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('int')
  puntaje: number;

  @Column()
  comentario: string;

  @Column()
  fecha: Date;

  @Column()
  grabacionId: string;

  @Column()
  usuarioId: string;
}
