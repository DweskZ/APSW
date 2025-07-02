import { CreateUsuarioInput } from './create-usuario.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateUsuarioInput extends PartialType(CreateUsuarioInput) {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  id: string;
}
