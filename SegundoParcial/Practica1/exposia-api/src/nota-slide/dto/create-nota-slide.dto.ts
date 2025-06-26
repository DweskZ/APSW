import { IsInt, IsPositive, Min, IsString } from 'class-validator';

export class CreateNotaSlideDto {
  @IsInt()
  @IsPositive()
  slide: number;          // número de diapositiva (1, 2, 3 …)

  @IsString()
  contenido: string;      // texto de la nota

  @IsInt()
  @Min(0)
  timestampSeg: number;   // segundo dentro de la grabación
}
