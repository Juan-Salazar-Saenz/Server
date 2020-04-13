"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const devolucionController_1 = require("../controllers/devolucionController");
class DevolucionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Devoluciom'));
        this.router.post('/', devolucionController_1.devolucionController.saveDevolucion);
    }
}
const devolucionRoutes = new DevolucionRoutes();
exports.default = devolucionRoutes.router;
