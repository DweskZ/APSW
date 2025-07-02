import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsDateString } from 'class-validator';

@InputType()
export class CreateGrabacionInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  url: string;

  @Field(() => String)
  @IsDateString()
  @IsNotEmpty()
  fecha: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  usuarioId: string;
}
