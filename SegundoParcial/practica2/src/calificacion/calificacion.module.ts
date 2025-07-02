import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalificacionService } from './calificacion.service';
import { CalificacionResolver } from './calificacion.resolver';
import { Calificacion } from './entities/calificacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Calificacion])],
  providers: [CalificacionService, CalificacionResolver],
})
export class CalificacionModule {}
