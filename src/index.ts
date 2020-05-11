import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

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

    constructor (){
        this.app = express();
        this.config();
        this.routes();
    }

    config():void{
        //settings 
        this.app.set('port', process.env.port || 3000);   
        //this.app.set('hostname', process.env.hostname || "127.0.0.1" )     

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
        this.app.listen(this.app.get('port'),() =>{
        //this.app.listen(this.app.get('port'), this.app.get('hostname') ,() =>{    
           //console.log('Server http://',  this.app.get('hostname'),':' , this.app.get('port'));
            console.log('Server http://hostname:' , this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();
