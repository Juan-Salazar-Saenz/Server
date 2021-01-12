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
exports.usuarioController = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
class UsuarioController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield usuario_1.default.find();
            return res.json(usuario);
        });
    }
    list1(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { tipo } = req.params;
            const usuario = yield usuario_1.default.find({ 'tipo': Number.parseInt(tipo) });
            return res.json(usuario);
        });
    }
    list2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield usuario_1.default.find({ 'id': id });
            return res.json(usuario);
        });
    }
    saveUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, nombreCompleto, email, photoUrl, nombres, apeliidos, ciudad, telefono, descrpcion, tipo } = req.body;
            const usuario = new usuario_1.default({ id, nombreCompleto, email, photoUrl, nombres, apeliidos, ciudad, telefono, descrpcion, tipo });
            yield usuario.save();
            return res.json({ text: "Usuario creado correctamente" });
        });
    }
    Update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ids } = req.params;
            const { id, nombreCompleto, email, photoUrl, nombres, apeliidos, ciudad, telefono, descrpcion, tipo } = req.body;
            const usuario = yield usuario_1.default.findByIdAndUpdate(ids, { id, nombreCompleto, email, photoUrl, nombres, apeliidos, ciudad, telefono, descrpcion, tipo });
            if (usuario) {
                return res.json({ text: "Usuario actulizado correctamente" });
            }
            else {
                return res.status(404).json({ text: "Usuario no existe" });
            }
        });
    }
}
exports.usuarioController = new UsuarioController();
