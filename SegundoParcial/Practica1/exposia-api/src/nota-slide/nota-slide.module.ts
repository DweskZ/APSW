import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotaSlide } from './entities/nota-slide.entity';
import { NotaSlideService } from './nota-slide.service';
import { NotaSlideController } from './nota-slide.controller';

@Module({
  imports: [TypeOrmModule.forFeature([NotaSlide])],
  controllers: [NotaSlideController],
  providers: [NotaSlideService],
})
export class NotaSlideModule {}
