import {Router} from 'express';
import { usuarioController } from '../controllers/usuarioController';

class UsuarioRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', (req, res) => res.send('Usuario'));
        this.router.post('/', usuarioController.saveUsuario);
        this.router.get('/full', usuarioController.list);        
        this.router.get('/tipo/:tipo', usuarioController.list1);
        this.router.get('/:id', usuarioController.list2);
        this.router.put('/:ids', usuarioController.Update);
    }
}

const usuarioRoutes = new UsuarioRoutes();
export default usuarioRoutes.router;