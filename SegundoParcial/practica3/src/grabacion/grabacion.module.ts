import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grabacion } from './entities/grabacion.entity';
import { GrabacionService } from './grabacion.service';
import { GrabacionGateway } from './grabacion.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Grabacion])],
  providers: [GrabacionService, GrabacionGateway],
})
export class GrabacionModule {}
