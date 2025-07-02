import { UsuariosModule } from './usuarios/usuarios.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { GrabacionModule } from './grabacion/grabacion.module';
import { CalificacionModule } from './calificacion/calificacion.module';


@Module({
  imports: [ UsuariosModule, 
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: process.env.DATABASE,
      autoLoadEntities: true,
      synchronize: true,
}),
    GrabacionModule,
    CalificacionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
