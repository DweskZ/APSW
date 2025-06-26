import { IsInt, IsPositive, IsString, IsUrl } from 'class-validator';

export class CreateGrabacionDto {
  @IsString()
  titulo: string;

  @IsUrl()
  urlAudio: string;

  @IsInt()
  @IsPositive()
  duracionSeg: number;   // duración en segundos
}
