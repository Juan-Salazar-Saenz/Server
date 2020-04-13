"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DevolucionSchema = new mongoose_1.Schema({
    idinc: String,
    fecha: String,
    iddevolucion: String,
});
exports.default = mongoose_1.model('Devolucion', DevolucionSchema);
