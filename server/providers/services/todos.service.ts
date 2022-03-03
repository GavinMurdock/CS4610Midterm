import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from 'server/entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todosRepository: Repository<Todo>,
  ) {}

  findAll() {
    return this.todosRepository.find();
  }

  async create(content: string) {
    const todo = new Todo();
    todo.content = content;
    todo.isComplete = false;
    console.log('creating');
    return await this.todosRepository.save(todo);
  }

  async update(todo) {
    const todoToUpdate = await this.todosRepository.findOne(todo.id);
    if (todo.isComplete) {
      todoToUpdate.isComplete = false;
    } else {
      todoToUpdate.isComplete = true;
    }
    await this.todosRepository.save(todoToUpdate);
  }
}
