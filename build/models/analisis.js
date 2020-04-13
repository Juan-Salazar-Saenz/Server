"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AnslisisSchema = new mongoose_1.Schema({
    id: String,
    diagnostico: String,
    Solucion: String,
    idanalista: String,
    photoUrl: String,
    nombre: String,
    fecha: String,
});
exports.default = mongoose_1.model('Analisis', AnslisisSchema);
