"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estadoOneController_1 = require("../controllers/estadoOneController");
class CreacionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Incidencia'));
        this.router.post('/', estadoOneController_1.estadoOneController.saveIncidencia);
        this.router.get('/full', estadoOneController_1.estadoOneController.list);
        this.router.get('/full1/:estado', estadoOneController_1.estadoOneController.list1);
        this.router.get('/:id', estadoOneController_1.estadoOneController.getOne);
        this.router.get('/coim/:coim', estadoOneController_1.estadoOneController.getOne2);
        this.router.delete('/:id', estadoOneController_1.estadoOneController.Delete);
        this.router.put('/:id', estadoOneController_1.estadoOneController.Update);
    }
}
const creacionRoutes = new CreacionRoutes();
exports.default = creacionRoutes.router;
