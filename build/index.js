"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const https_1 = __importDefault(require("https"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//instalar para que todo funcione
// npm install
// npm i express morgan cors
// npm install nodemon -D 
// npm install -g typescript
// npm install https
// npm install fs
// npm run build
// npm run dev
//https://127.0.0.1:3000/
//https://34.67.198.7:3000/
//Generar un certificado SSL
// openssl genrsa -aes256 -out my_cert.pem 2048
// openssl req -new -key my_cert.pem -out my_cert.csr
// openssl x509 -req -days 365 -in my_cert.csr -signkey my_cert.pem -out my_cert.crt
// openssl rsa -in my_cert.pem -out my_cert.key
// Los cuatro archivos deben ir en la raiz para que cuando se compile el javascrip encuentre los archivo en la raiz
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
        this.certificado = "";
        const tamaño = __dirname.length - 6;
        const carpeta = __dirname;
        this.certificado = carpeta.substring(0, tamaño);
        console.log(this.certificado);
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
        https_1.default.createServer({
            key: fs_1.default.readFileSync(this.certificado + '/my_cert.key'),
            cert: fs_1.default.readFileSync(this.certificado + '/my_cert.crt')
        }, this.app).listen(this.app.get('port'), () => {
            //this.app.listen(this.app.get('port'), this.app.get('hostname') ,() =>{      
            console.log('Server https://', this.app.get('hostname'), ':', this.app.get('port'));
            console.log('Server https://34.67.198.7:3000');
            //console.log('Server http://hostname:' , this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
