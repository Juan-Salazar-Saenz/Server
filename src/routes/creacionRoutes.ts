import {Router} from 'express';
import { estadoOneController } from '../controllers/estadoOneController';

class CreacionRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', (req, res) => res.send('Incidencia'));
        this.router.post('/', estadoOneController.saveIncidencia);
        this.router.get('/full', estadoOneController.list);
        this.router.get('/full1/:estado', estadoOneController.list1);
        this.router.get('/:id', estadoOneController.getOne);
        this.router.get('/coim/:coim', estadoOneController.getOne2);
        this.router.delete('/:id', estadoOneController.Delete);
        this.router.put('/:id', estadoOneController.Update);
        this.router.put('/fase/:id', estadoOneController.siguienteFase);
    }
}

const creacionRoutes = new CreacionRoutes();
export default creacionRoutes.router;