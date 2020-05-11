"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const analisisController_1 = require("../controllers/analisisController");
class AnalisisRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Analisis'));
        this.router.post('/', analisisController_1.analisisController.saveAnalisis);
    }
}
const analisisRoutes = new AnalisisRoutes();
exports.default = analisisRoutes.router;
