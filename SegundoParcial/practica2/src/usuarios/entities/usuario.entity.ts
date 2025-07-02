import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'usuarios' })
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID, { description: 'ID único del usuario' })
  id: string;

  @Column()
  @Field(() => String, { description: 'Nombre completo del usuario' })
  nombre: string;

  @Column({ unique: true })
  @Field(() => String, { description: 'Correo electrónico del usuario' })
  email: string;

  @Column()
  @Field(() => String, { description: 'Rol del usuario (ej: estudiante, docente)' })
  rol: string;
}
