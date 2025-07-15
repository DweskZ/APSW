import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Calificacion } from './calificacion/entities/calificacion.entity';
import { Grabacion } from './grabacion/entities/grabacion.entity';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';
import { GrabacionModule } from './grabacion/grabacion.module';
import { CalificacionModule } from './calificacion/calificacion.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'app.db',
      entities: [Calificacion, Grabacion, Usuario],
      synchronize: true,  
    }),
    CalificacionModule,
    GrabacionModule,
    UsuarioModule,
  ],
})
export class AppModule {}
