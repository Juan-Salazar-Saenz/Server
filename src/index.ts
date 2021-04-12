import fs from 'fs';
import https from 'https';
import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

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
import indexRoutes from './routes/indexRoutes';
import creacionRoutes from './routes/creacionRoutes';
import usuarioRoutes from './routes/usuarioRoutes';
import analissRoutes from './routes/analisisRoutes';
import devolucionRoutes from './routes/devolucionRoutes';
import tipoincidenteRoutes from './routes/tipoIncidenteRoutes';

//databse
import './database';

class Server {

    public app: Application;
    public certificado = "";

    constructor (){
        const tamaño = __dirname.length - 6;
        const carpeta = __dirname;
        this.certificado = carpeta.substring(0,tamaño);
        console.log(this.certificado);
        this.app = express();
        this.config();
        this.routes();
    }

    config():void{
        //settings 
        this.app.set('port', process.env.port || 3000);   
        this.app.set('hostname', process.env.hostname || "127.0.0.1" )     

        //middlewares
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes():void{
        //routes
        this.app.use('/', indexRoutes);
        this.app.use('/apiA', creacionRoutes);
        this.app.use('/apiB', usuarioRoutes);
        this.app.use('/apiC', analissRoutes);
        this.app.use('/apiD', devolucionRoutes);
        this.app.use('/apiE', tipoincidenteRoutes); 
    }

    start():void{

        https.createServer({
            key: fs.readFileSync(this.certificado + '/my_cert.key'),
            cert: fs.readFileSync(this.certificado + '/my_cert.crt')
        }, this.app).listen(this.app.get('port'),() =>{
            //this.app.listen(this.app.get('port'), this.app.get('hostname') ,() =>{      
            console.log('Server https://',  this.app.get('hostname'),':' , this.app.get('port'));
            console.log('Server https://34.67.198.7:3000');
            //console.log('Server http://hostname:' , this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();
