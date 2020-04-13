import {Router} from 'express';
import { analisisController } from '../controllers/analisisController';

class AnalisisRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', (req, res) => res.send('Usuario'));
        this.router.post('/', analisisController.saveAnalisis);        
    }
}

const analisisRoutes = new AnalisisRoutes();
export default analisisRoutes.router;