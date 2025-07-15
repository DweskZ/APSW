import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Calificacion } from './entities/calificacion.entity';
import { CalificacionService } from './calificacion.service';
import { CalificacionGateway } from './calificacion.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Calificacion])],
  providers: [CalificacionService, CalificacionGateway],
})
export class CalificacionModule {}
