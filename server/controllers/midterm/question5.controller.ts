import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { Skip } from 'server/decorators/skip.decorator';
import { AuthGuard } from 'server/providers/guards/auth.guard';
import { TodosService } from 'server/providers/services/todos.service';

@Controller()
@Skip(AuthGuard)
export class Question5Controller {
  constructor(private todosService: TodosService) {}

  @Get('/todos')
  public async index() {
    const todos = await this.todosService.findAll();
    return { todos };
  }

  @Post('/todos')
  public async create(@Body() todoPayload) {
    const todo = await this.todosService.create(todoPayload.content);
    return { todo };
  }

  @Put('/todos')
  public async update(@Body() todoPayload) {
    await this.todosService.update(todoPayload.todo);
  }
}
