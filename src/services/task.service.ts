import { BaseService } from '../config/base.service';
import { TaskEntity } from '../entities/task.entity';
import { TaskDTO } from '../dto/task.dto';
import { DeleteResult, UpdateResult } from 'typeorm';


export class TaskService extends BaseService<TaskEntity> {

    constructor() {
        super(TaskEntity);
    }

    async findAllTasks(): Promise<TaskEntity[]> {
        return (await this.execRepository).find();
    }
    async findTaskById(id: string): Promise<TaskEntity | null> {
        return (await this.execRepository).findOneBy({  id });
    }
    async createTask(body: TaskDTO ): Promise<TaskEntity> {
        return (await this.execRepository).save(body);
    }
    async deleteTask(id: string): Promise<DeleteResult> {
        return (await this.execRepository).delete({ id });
    }
    async updateTask(id: string, infoUpdated: TaskDTO): Promise<UpdateResult> {
        return (await this.execRepository).update(id, infoUpdated);
    }
}