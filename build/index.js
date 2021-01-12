"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//instalar para que todo funcione
// npm install
// npm i express morgan cors
// npm install nodemon -D 
// npm install -g typescript
// npm run build
// npm run dev
//import routes
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const creacionRoutes_1 = __importDefault(require("./routes/creacionRoutes"));
const usuarioRoutes_1 = __importDefault(require("./routes/usuarioRoutes"));
const analisisRoutes_1 = __importDefault(require("./routes/analisisRoutes"));
const devolucionRoutes_1 = __importDefault(require("./routes/devolucionRoutes"));
const tipoIncidenteRoutes_1 = __importDefault(require("./routes/tipoIncidenteRoutes"));
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
        this.app.set('hostname', process.env.hostname || "127.0.0.1");
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
        this.app.use('/apiE', tipoIncidenteRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            //this.app.listen(this.app.get('port'), this.app.get('hostname') ,() =>{    
            console.log('Server http://', this.app.get('hostname'), ':', this.app.get('port'));
            //console.log('Server http://hostname:' , this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
