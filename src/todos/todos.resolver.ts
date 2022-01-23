import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TodosService } from './todos.service';
import { Todo, DeleteTodoResponse } from './dto/todo.dto';

@Resolver((of) => Todo)
export class TodosResolver {
  constructor(private readonly todosService: TodosService) {}

  @Query((returns) => [Todo])
  async getTodos(): Promise<Todo[]> {
    return this.todosService.getTodos();
  }

  @Mutation((returns) => Todo, { nullable: true })
  async toggleTodo(@Args('id') id: string) {
    return this.todosService.toggleTodo(id);
  }

  @Mutation((returns) => Todo)
  async createTodo(@Args('content') content: string) {
    return this.todosService.createTodo(content);
  }

  @Mutation((returns) => Todo, { nullable: true })
  async updateTodo(@Args('id') id: string, @Args('content') content: string) {
    return this.todosService.updateTodo(id, content);
  }

  @Mutation((returns) => DeleteTodoResponse)
  async deleteTodo(@Args('id') id: string) {
    return this.todosService.deleteTodo(id);
  }

  @Query((returns) => Todo, { nullable: true })
  async findTodoById(@Args('id') id: string) {
    return this.todosService.findTodoById(id);
  }
}
