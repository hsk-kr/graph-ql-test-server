import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    TodosModule,
  ],
})
export class AppModule {}
