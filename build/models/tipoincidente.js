"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TipoIncidenteSchema = new mongoose_1.Schema({
    numero: Number,
    nombre: String
});
exports.default = mongoose_1.model('TipoIncidencia', TipoIncidenteSchema);
