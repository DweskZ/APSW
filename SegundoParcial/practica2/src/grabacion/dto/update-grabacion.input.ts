import { CreateGrabacionInput } from './create-grabacion.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class UpdateGrabacionInput extends PartialType(CreateGrabacionInput) {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  id: string;
}
