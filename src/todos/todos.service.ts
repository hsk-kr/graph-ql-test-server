import { Injectable } from '@nestjs/common';
import { Todo, DeleteTodoResponse } from './dto/todo.dto';

@Injectable()
export class TodosService {
  todos: Todo[] = [];

  async getTodos(): Promise<Todo[]> {
    return this.todos;
  }

  async toggleTodo(id: string): Promise<Todo | null> {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) todo.checked = !todo.checked;
    return todo || null;
  }

  async createTodo(content: string): Promise<Todo | null> {
    const newTodo: Todo = {
      id: new Date().getTime().toString() + this.todos.length.toString(),
      content,
      checked: false,
    };

    this.todos.push(newTodo);

    return newTodo;
  }

  async updateTodo(id: string, content: string): Promise<Todo | null> {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) todo.content = content;
    return todo;
  }

  async deleteTodo(id: string): Promise<DeleteTodoResponse> {
    const findIdx = this.todos.findIndex((todo) => todo.id === id);
    if (findIdx === -1)
      return {
        ok: false,
        error: 'Not Found',
      };

    this.todos.splice(findIdx, 1);
    return {
      ok: true,
    };
  }

  async findTodoById(id: string): Promise<Todo | null> {
    return this.todos.find((todo) => todo.id === id);
  }
}
