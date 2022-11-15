import { ConfigServer } from "./config/config";
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { TaskRouter } from './task.router';

class ServerBoostrap extends ConfigServer {
    public app: express.Application = express();
    private port: number = this.getNumberEnv('PORT');

    /**
     * Creates an instance of ServerBoostrap.
     * @memberof ServerBoostrap
     */
    constructor() {
        super();
        // Middleware
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.dbConnection();
        this.app.use(morgan('dev'));
        this.app.use(cors());
        // Router
        this.app.use('/api',this.routers());
        // Server
        this.listen();
    }

    /**
     * Retorna las rutas disponibles
     *
     * @return {*}  {Array<express.Router>}
     * @memberof ServerBoostrap
     */
    routers(): Array<express.Router> {
        return [new TaskRouter().router]
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`🚀 Server ready at http://localhost:${this.port}`);
        })
    }
}

new ServerBoostrap();