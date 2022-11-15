"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.ConfigServer = void 0;
const dotenv = __importStar(require("dotenv"));
const typeorm_1 = require("typeorm");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
class ConfigServer {
    constructor() {
        const nodeNameEnv = this.createPathEnv(this.nodeEnv);
        dotenv.config({ path: nodeNameEnv });
    }
    /**
     * getEnviroment
     * Se encarga de obtener el valor del la variable de entorno.
     * @param {string} k
     * @return {*}  {(string | undefined)}
     * @memberof ConfigServer
     */
    getEnviroment(k) {
        return process.env[k];
    }
    /**
     * getNumberEnv
     * Obtiene el valor de la variable entorno en numero
     * @param {string} k
     * @return {*}  {number}
     * @memberof ConfigServer
     */
    getNumberEnv(k) {
        return Number(this.getEnviroment(k));
    }
    /**
     * nodeEnv
     * Se encarga de obtener el entorno por medio de la variable declarada. NODE_ENV
     * @readonly
     * @type {string}
     * @memberof ConfigServer
     */
    get nodeEnv() {
        var _a;
        return ((_a = this.getEnviroment('NODE_ENV')) === null || _a === void 0 ? void 0 : _a.trim()) || '';
    }
    /**
    * createPathEnv
    * Se encarga de recupeara el archivo a usar con sus valores de entorno.
    * @param {string} path
    * @return {*}  {string}
    * @memberof ConfigServer
    */
    createPathEnv(path) {
        const arrEnv = ['env'];
        if (path.length > 0) {
            const stringToArray = path.split('.');
            arrEnv.unshift(...stringToArray);
        }
        return '.' + arrEnv.join('.');
    }
    /**
    * Configuracion del ORM para la base de datos.
    *
    * @readonly
    * @type {DataSourceOptions}
    * @memberof ConfigServer
    */
    get typeORMConfig() {
        console.log(this.getEnviroment('DB_HOST'));
        console.log(this.getNumberEnv('DB_PORT'));
        console.log(this.getEnviroment('DB_USER'));
        console.log([__dirname]);
        console.log(["../entities/*.ts"]);
        return {
            type: 'postgres',
            host: this.getEnviroment('DB_HOST'),
            port: this.getNumberEnv('DB_PORT'),
            username: this.getEnviroment('DB_USER'),
            password: this.getEnviroment('DB_PASSWORD'),
            database: this.getEnviroment('DB_DATABASE'),
            //entities:[__dirname + "../../entities/*.ts,.js"],
            entities: [__dirname + "/../entities/**/*.{js,ts}"],
            migrations: [__dirname + '../../migrations/*{.ts, .js}'],
            synchronize: true,
            logging: false,
            namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy()
        };
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(`🚀  Database Connected`);
                return yield new typeorm_1.DataSource(this.typeORMConfig).initialize();
            }
            catch (error) {
                console.log(`🚀 Database Connection Error: ${error}`);
                return yield new typeorm_1.DataSource(this.typeORMConfig).initialize();
            }
        });
    }
}
exports.ConfigServer = ConfigServer;
