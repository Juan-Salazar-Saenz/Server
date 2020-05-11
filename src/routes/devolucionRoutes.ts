import {Router} from 'express';
import { devolucionController } from '../controllers/devolucionController';

class DevolucionRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', (req, res) => res.send('Devolucion'));
        this.router.post('/', devolucionController.saveDevolucion);        
    }
}

const devolucionRoutes = new DevolucionRoutes();
export default devolucionRoutes.router;