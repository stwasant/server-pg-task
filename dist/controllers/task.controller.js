"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const task_service_1 = require("../services/task.service");
const http_response_1 = require("../shared/response/http.response");
class TaskController {
    constructor(taskService = new task_service_1.TaskService(), httpResponse = new http_response_1.HttResponse()) {
        this.taskService = taskService;
        this.httpResponse = httpResponse;
    }
    getTasks(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.taskService.findAllTasks();
                console.log(`✅ Successfull ${data}`);
                return this.httpResponse.Ok(resp, data);
            }
            catch (error) {
                console.error(`❌  Error getUsers users: ${error}`);
                return this.httpResponse.InternalServerError(resp, error);
            }
        });
    }
    getTaskById(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.taskService.findTaskById(req.params.id);
                if (!data) {
                    return this.httpResponse.NotFound(resp, 'Does not exist data to return for the id provided');
                }
                console.log(`✅ Successfull ${data}`);
                return this.httpResponse.Ok(resp, data);
            }
            catch (error) {
                console.error(`❌  Error getTaskById users: ${error}`);
                return this.httpResponse.InternalServerError(resp, error);
            }
        });
    }
    createTask(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.taskService.createTask(req.body);
                console.log(`✅ Successfull ${data}`);
                return this.httpResponse.Created(resp, data);
            }
            catch (error) {
                console.error(`❌  Error createTask users: ${error}`);
                return this.httpResponse.InternalServerError(resp, error);
            }
        });
    }
    deleteTask(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.taskService.deleteTask(req.params.id);
                if (!data.affected) {
                    return this.httpResponse.InternalServerError(resp, 'Occured an error trying to delete');
                }
                console.log(`✅ Successfull ${data}`);
                return this.httpResponse.Ok(resp, data);
            }
            catch (error) {
                console.error(`❌  Error deleteTask users: ${error}`);
                return this.httpResponse.InternalServerError(resp, error);
            }
        });
    }
    updateTask(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.taskService.updateTask(req.params.id, req.body);
                if (!data.affected) {
                    return this.httpResponse.InternalServerError(resp, 'Occured an error trying to update');
                }
                console.log(`✅ Successfull ${data}`);
                return this.httpResponse.Ok(resp, data);
            }
            catch (error) {
                console.error(`❌  Error updateUser users: ${error}`);
                return this.httpResponse.InternalServerError(resp, error);
            }
        });
    }
}
exports.TaskController = TaskController;
