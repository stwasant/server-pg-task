import { Request, Response } from 'express';
import { DeleteResult, UpdateResult } from 'typeorm';
import { TaskService } from '../services/task.service';
import { HttResponse } from '../shared/response/http.response';
export class TaskController {
    constructor (private readonly taskService: TaskService = new TaskService(),
                 private readonly httpResponse: HttResponse = new HttResponse()
                ) {}

    async getTasks(req: Request, resp: Response) {
        try {
            const data = await this.taskService.findAllTasks();
            console.log(`✅ Successfull ${data}`);
            return this.httpResponse.Ok(resp, data);        
        } catch (error) {
            console.error( `❌  Error getUsers users: ${error}`);
            return this.httpResponse.InternalServerError(resp, error);
        }
    }
    
    async getTaskById(req: Request, resp: Response) {
        try {
            const data = await this.taskService.findTaskById(req.params.id);
            if (!data) {
                return this.httpResponse.NotFound(resp, 'Does not exist data to return for the id provided');    
            }
            console.log(`✅ Successfull ${data}`);
            return this.httpResponse.Ok(resp, data);
        } catch (error) {
            console.error( `❌  Error getTaskById users: ${error}`);
            return this.httpResponse.InternalServerError(resp, error);
        }
    }

    async createTask(req: Request, resp: Response) {
        try {
            const data = await this.taskService.createTask(req.body);
            console.log(`✅ Successfull ${data}`);
            return this.httpResponse.Created(resp, data);
        } catch (error) {
            console.error( `❌  Error createTask users: ${error}`);
            return this.httpResponse.InternalServerError(resp, error);
        }
    }

    async deleteTask(req: Request, resp: Response) {
        try {
            const data: DeleteResult = await this.taskService.deleteTask(req.params.id);
            if (!data.affected) {
                return this.httpResponse.InternalServerError(resp, 'Occured an error trying to delete');
            }
            console.log(`✅ Successfull ${data}`);
            return this.httpResponse.Ok(resp, data);
        } catch (error) {
            console.error( `❌  Error deleteTask users: ${error}`);
            return this.httpResponse.InternalServerError(resp, error);
        }
    }

    async updateTask(req: Request, resp: Response) {
        try {
            const data: UpdateResult = await this.taskService.updateTask(req.params.id, req.body);
            if (!data.affected) {
                return this.httpResponse.InternalServerError(resp, 'Occured an error trying to update');
            }            
            console.log(`✅ Successfull ${data}`);
            return this.httpResponse.Ok(resp, data);
        } catch (error) {
            console.error( `❌  Error updateUser users: ${error}`);
            return this.httpResponse.InternalServerError(resp, error);
        }
    }
}