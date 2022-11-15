"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRouter = void 0;
const router_1 = require("./shared/routes/router");
const task_controller_1 = require("./controllers/task.controller");
class TaskRouter extends router_1.BaseRouter {
    constructor() {
        super(task_controller_1.TaskController);
    }
    routes() {
        this.router.get('/tasks', (req, resp) => this.controller.getTasks(req, resp));
        this.router.get('/task/:id', (req, resp) => this.controller.getTaskById(req, resp));
        this.router.post('/createTask', (req, resp) => this.controller.createTask(req, resp));
        this.router.put('/updateTask/:id', (req, resp) => this.controller.updateTask(req, resp));
        this.router.delete('/deleteTask/:id', (req, resp) => this.controller.deleteTask(req, resp));
    }
}
exports.TaskRouter = TaskRouter;
