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
const analisis_1 = __importDefault(require("../models/analisis"));
class AnalisisController {
    saveAnalisis(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, diagnostico, Solucion, idanalista, photoUrl, nombre, fecha } = req.body;
            const Analisis = new analisis_1.default({ id, diagnostico, Solucion, idanalista, photoUrl, nombre, fecha });
            yield Analisis.save();
            return res.json({ text: "Analisis guardado correctamente" });
        });
    }
}
exports.analisisController = new AnalisisController();
