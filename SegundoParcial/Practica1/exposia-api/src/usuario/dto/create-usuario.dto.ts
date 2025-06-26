// create-usuario.dto.ts

import { IsString, IsEmail, IsOptional } from 'class-validator';

export class CreateUsuarioDto {
  @IsString() nombre: string;
  @IsEmail()  email: string;
  @IsOptional() @IsString() rol?: string;
}
