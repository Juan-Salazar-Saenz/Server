"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Incidencia_1 = __importDefault(require("../models/Incidencia"));
class EstadoOneController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const incidencia = yield Incidencia_1.default.find();
            return res.json(incidencia);
        });
    }
    list1(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { estado } = req.params;
            const incidencia = yield Incidencia_1.default.find({ 'estado': Number.parseInt(estado) });
            return res.json(incidencia);
        });
    }
    saveIncidencia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { coim, nombre, descripcion, fecha, tema, tipo, usuario, estado } = req.body;
            const incidencia = new Incidencia_1.default({ coim, nombre, descripcion, fecha, tema, tipo, usuario, estado });
            yield incidencia.save();
            return res.json({ text: "Incidencia Creada correctamente" });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const incidencia = yield Incidencia_1.default.findById(id);
            if (incidencia) {
                return res.json(incidencia);
            }
            else {
                return res.status(404).json({ text: "Incidencia no existe" });
            }
        });
    }
    getOne2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { coim } = req.params;
            const incidencia = yield Incidencia_1.default.find({ 'coim': coim });
            if (incidencia) {
                console.log(incidencia);
                return res.json(incidencia);
            }
            else {
                return res.status(404).json({ text: "Incidencia no existe" });
            }
        });
    }
    Delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const incidencia = yield Incidencia_1.default.findByIdAndDelete(id);
            if (incidencia) {
                return res.json({ text: "Incidencia eliminada correctamente" });
            }
            else {
                return res.status(404).json({ text: "Incidencia no existe" });
            }
        });
    }
    Update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { coim, nombre, descripcion, fecha, tema, tipo, usuario, estado } = req.body;
            const incidencia = yield Incidencia_1.default.findByIdAndUpdate(id, { coim, nombre, descripcion, fecha, tema, tipo, usuario, estado });
            if (incidencia) {
                return res.json({ text: "Incidencia actulizada correctamente" });
            }
            else {
                return res.status(404).json({ text: "Incidencia no existe" });
            }
        });
    }
    siguienteFase(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log(req.body);
            const { estado } = req.body;
            const incidencia = yield Incidencia_1.default.findByIdAndUpdate(id, { "estado": estado });
            if (incidencia) {
                return res.json({ text: "Incidencia actulizada correctamente" });
            }
            else {
                return res.status(404).json({ text: "Incidencia no existe" });
            }
        });
    }
}
exports.estadoOneController = new EstadoOneController();
