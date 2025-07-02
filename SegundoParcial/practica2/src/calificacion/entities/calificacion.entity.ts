import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'calificaciones' })
export class Calificacion {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID, { description: 'ID de la calificación' })
  id: string;

  @Column('int')
  @Field(() => Int, { description: 'Puntaje otorgado' })
  puntaje: number;

  @Column()
  @Field(() => String, { description: 'Comentario de la calificación' })
  comentario: string;

  @Column()
  @Field(() => Date, { description: 'Fecha de la calificación' })
  fecha: Date;

  @Column()
  @Field(() => String, { description: 'ID de la grabación calificada' })
  grabacionId: string;

  @Column()
  @Field(() => String, { description: 'ID del usuario que califica' })
  usuarioId: string;
}
