import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('grabaciones')
export class Grabacion {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  titulo: string;

  @Column()
  url: string;

  @Column()
  fecha: Date;

  @Column()
  usuarioId: string;
}
