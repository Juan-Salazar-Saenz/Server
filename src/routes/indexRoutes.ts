import {Router} from 'express';

class IndexRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', (req, res) => res.send('Conectado a la api de servicios de colocaciones'));
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;