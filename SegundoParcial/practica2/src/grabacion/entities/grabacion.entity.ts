import { ObjectType, Field, ID, GraphQLISODateTime } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType()
@Entity({ name: 'grabaciones' })
export class Grabacion {
  @Field(() => ID, { description: 'ID de la grabación' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String, { description: 'Título de la grabación' })
  @Column()
  titulo: string;

  @Field(() => String, { description: 'URL del archivo de la grabación' })
  @Column()
  url: string;

  @Field(() => GraphQLISODateTime, { description: 'Fecha de la grabación' })
  @Column()
  fecha: Date;

  @Field(() => String, { description: 'ID del usuario que subió la grabación' })
  @Column()
  usuarioId: string;
}
