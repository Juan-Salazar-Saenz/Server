import {Router} from 'express';
import { tipoIncidenteController } from '../controllers/tipoIncidenteController';

class TipoIncidenteRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', (req, res) => res.send('Tipo de Incidenite'));
        this.router.get('/full/:seccion', tipoIncidenteController.list);    
        this.router.post('/', tipoIncidenteController.saveTipoincidente);    
    }
}

const tipoIncidenteRoutes = new TipoIncidenteRoutes();
export default tipoIncidenteRoutes.router;