import { CreateCalificacionInput } from './create-calificacion.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCalificacionInput extends PartialType(CreateCalificacionInput) {
  @Field(() => String)
  id: string;
}
