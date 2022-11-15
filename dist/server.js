"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config/config");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const task_router_1 = require("./task.router");
class ServerBoostrap extends config_1.ConfigServer {
    /**
     * Creates an instance of ServerBoostrap.
     * @memberof ServerBoostrap
     */
    constructor() {
        super();
        this.app = (0, express_1.default)();
        this.port = this.getNumberEnv('PORT');
        // Middleware
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.dbConnection();
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        // Router
        this.app.use('/api', this.routers());
        // Server
        this.listen();
    }
    /**
     * Retorna las rutas disponibles
     *
     * @return {*}  {Array<express.Router>}
     * @memberof ServerBoostrap
     */
    routers() {
        return [new task_router_1.TaskRouter().router];
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`🚀 Server ready at http://localhost:${this.port}`);
        });
    }
}
new ServerBoostrap();
