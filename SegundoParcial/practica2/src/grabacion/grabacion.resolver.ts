import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GrabacionService } from './grabacion.service';
import { Grabacion } from './entities/grabacion.entity';
import { CreateGrabacionInput } from './dto/create-grabacion.input';
import { UpdateGrabacionInput } from './dto/update-grabacion.input';

@Resolver(() => Grabacion)
export class GrabacionResolver {
  constructor(private readonly grabacionService: GrabacionService) {}

  @Mutation(() => Grabacion)
  createGrabacion(
    @Args('createGrabacionInput') createGrabacionInput: CreateGrabacionInput,
  ) {
    return this.grabacionService.create(createGrabacionInput);
  }

  @Query(() => [Grabacion], { name: 'grabaciones' })
  findAll() {
    return this.grabacionService.findAll();
  }

  @Query(() => Grabacion, { name: 'grabacion' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.grabacionService.findOne(id);
  }

  @Mutation(() => Grabacion)
  updateGrabacion(
    @Args('updateGrabacionInput') updateGrabacionInput: UpdateGrabacionInput,
  ) {
    return this.grabacionService.update(updateGrabacionInput.id, updateGrabacionInput);
  }

  @Mutation(() => Grabacion)
  removeGrabacion(@Args('id', { type: () => String }) id: string) {
    return this.grabacionService.remove(id);
  }
}
