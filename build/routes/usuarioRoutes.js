"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioController_1 = require("../controllers/usuarioController");
class UsuarioRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Usuario'));
        this.router.post('/', usuarioController_1.usuarioController.saveUsuario);
        this.router.get('/full', usuarioController_1.usuarioController.list);
        this.router.get('/tipo/:tipo', usuarioController_1.usuarioController.list1);
        this.router.get('/:id', usuarioController_1.usuarioController.list2);
        this.router.put('/:ids', usuarioController_1.usuarioController.Update);
    }
}
const usuarioRoutes = new UsuarioRoutes();
exports.default = usuarioRoutes.router;
