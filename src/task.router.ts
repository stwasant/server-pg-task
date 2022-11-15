import { BaseRouter } from './shared/routes/router';
import { TaskController } from './controllers/task.controller';

export class TaskRouter extends BaseRouter<TaskController> {
    constructor() {
        super(TaskController);
    }

    routes(): void {
        this.router.get('/tasks',(req, resp) => this.controller.getTasks(req, resp));
        this.router.get('/task/:id',(req, resp) => this.controller.getTaskById(req, resp));
        this.router.post('/createTask',(req, resp) => this.controller.createTask(req, resp));
        this.router.put('/updateTask/:id',(req, resp) => this.controller.updateTask(req, resp));
        this.router.delete('/deleteTask/:id',(req, resp) => this.controller.deleteTask(req, resp));
    }
}