"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//import routes
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const creacionRoutes_1 = __importDefault(require("./routes/creacionRoutes"));
const usuarioRoutes_1 = __importDefault(require("./routes/usuarioRoutes"));
const analisisRoutes_1 = __importDefault(require("./routes/analisisRoutes"));
const devolucionRoutes_1 = __importDefault(require("./routes/devolucionRoutes"));
//databse
require("./database");
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        //settings 
        this.app.set('port', process.env.port || 3000);
        //middlewares
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        //routes
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/apiA', creacionRoutes_1.default);
        this.app.use('/apiB', usuarioRoutes_1.default);
        this.app.use('/apiC', analisisRoutes_1.default);
        this.app.use('/apiD', devolucionRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'), "192.168.0.24");
        });
    }
}
const server = new Server();
server.start();
