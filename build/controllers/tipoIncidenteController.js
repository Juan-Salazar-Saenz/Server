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
exports.tipoIncidenteController = void 0;
const tipoincidente_1 = __importDefault(require("../models/tipoincidente"));
class TipoIncidenteController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipoIncidente = yield tipoincidente_1.default.find();
            return res.json(tipoIncidente);
        });
    }
    saveTipoincidente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre } = req.body;
            const tipoIncidente = new tipoincidente_1.default({ nombre });
            yield tipoIncidente.save();
            return res.json({ text: "Tipo de incidente guardado correctamente" });
        });
    }
}
exports.tipoIncidenteController = new TipoIncidenteController();
