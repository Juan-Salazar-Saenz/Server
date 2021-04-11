"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipoIncidenteController_1 = require("../controllers/tipoIncidenteController");
class TipoIncidenteRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Tipo de Incidenite'));
        this.router.get('/full/:numero', tipoIncidenteController_1.tipoIncidenteController.list);
        this.router.post('/', tipoIncidenteController_1.tipoIncidenteController.saveTipoincidente);
    }
}
const tipoIncidenteRoutes = new TipoIncidenteRoutes();
exports.default = tipoIncidenteRoutes.router;
