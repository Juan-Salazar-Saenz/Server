"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UsuarioSchema = new mongoose_1.Schema({
    id: String,
    nombreCompleto: String,
    email: String,
    photoUrl: String,
    nombres: String,
    apeliidos: String,
    ciudad: String,
    telefono: Number,
    descrpcion: String,
    tipo: Number,
});
exports.default = mongoose_1.model('Usuario', UsuarioSchema);
