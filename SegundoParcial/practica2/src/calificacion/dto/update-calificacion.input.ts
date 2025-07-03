import { CreateCalificacionInput } from './create-calificacion.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class UpdateCalificacionInput extends PartialType(CreateCalificacionInput) {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  id: string;
}
