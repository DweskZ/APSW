import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { GrabacionModule } from './grabacion/grabacion.module';
import { NotaSlideModule } from './nota-slide/nota-slide.module';
@Module({
  imports: [
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db.sqlite',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,    // solo para la práctica
  }),
  UsuarioModule,
  GrabacionModule,
  NotaSlideModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
