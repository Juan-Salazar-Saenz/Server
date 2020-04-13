"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const IncidenciaSchema = new mongoose_1.Schema({
    coim: String,
    nombre: String,
    descripcion: String,
    fecha: String,
    tema: String,
    tipo: String,
    usuario: String,
    estado: Number
});
exports.default = mongoose_1.model('Incidencia', IncidenciaSchema);
