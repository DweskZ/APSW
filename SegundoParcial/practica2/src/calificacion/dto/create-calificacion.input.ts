import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, Min, Max, IsString, IsNotEmpty, IsDateString } from 'class-validator';

@InputType()
export class CreateCalificacionInput {
  @Field(() => Int)
  @IsInt()
  @Min(0)
  @Max(100)
  puntaje: number;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  comentario: string;

  @Field(() => String)
  @IsDateString()
  fecha: String;

  @Field(() => String)
  @IsNotEmpty()
  usuarioId: string;

  @Field(() => String)
  @IsNotEmpty()
  grabacionId: string;
}
