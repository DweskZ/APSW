import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CalificacionService } from './calificacion.service';
import { Calificacion } from './entities/calificacion.entity';
import { CreateCalificacionInput } from './dto/create-calificacion.input';
import { UpdateCalificacionInput } from './dto/update-calificacion.input';

@Resolver(() => Calificacion)
export class CalificacionResolver {
  constructor(private readonly calificacionService: CalificacionService) {}

  @Mutation(() => Calificacion)
  createCalificacion(
    @Args('createCalificacionInput') createCalificacionInput: CreateCalificacionInput,
  ) {
    return this.calificacionService.create(createCalificacionInput);
  }

  @Query(() => [Calificacion], { name: 'calificaciones' })
  findAll() {
    return this.calificacionService.findAll();
  }

  @Query(() => Calificacion, { name: 'calificacion' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.calificacionService.findOne(id);
  }

  @Mutation(() => Calificacion)
  updateCalificacion(
    @Args('updateCalificacionInput') updateCalificacionInput: UpdateCalificacionInput,
  ) {
    return this.calificacionService.update(updateCalificacionInput.id, updateCalificacionInput);
  }

  @Mutation(() => Calificacion)
  removeCalificacion(@Args('id', { type: () => String }) id: string) {
    return this.calificacionService.remove(id);
  }
}
