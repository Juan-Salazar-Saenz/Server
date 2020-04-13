import {Request, Response} from 'express';

import UsuarioModel , { Usuario } from '../models/usuario';

class UsuarioController {

    public async list(req: Request ,res: Response){
        const usuario : Usuario[] = await UsuarioModel.find();
        return res.json(usuario);
    }

    public async list1(req: Request ,res: Response){
        const { tipo } = req.params; 
        const usuario : Usuario[] = await UsuarioModel.find({'tipo': Number.parseInt(tipo)});
        return res.json(usuario);
    }

    public async list2(req: Request ,res: Response){
        const { id } = req.params;         
        const usuario = await UsuarioModel.find({'id': id});
        return res.json(usuario);
    }

    public async saveUsuario (req: Request, res: Response){
        const {id, nombreCompleto, email, photoUrl, nombres, apeliidos, ciudad, telefono, descrpcion, tipo} = req.body;
        const usuario: Usuario = new UsuarioModel({id, nombreCompleto, email, photoUrl, nombres, apeliidos, ciudad, telefono, descrpcion, tipo});
        await usuario.save();
        return res.json({text: "Usuario creado correctamente"});
    }

    public async Update (req: Request ,res: Response): Promise<any> {
        const { ids } = req.params;  
        const {id, nombreCompleto, email, photoUrl, nombres, apeliidos, ciudad, telefono, descrpcion, tipo} = req.body;      
        const usuario = await UsuarioModel.findByIdAndUpdate(ids,{id, nombreCompleto, email, photoUrl, nombres, apeliidos, ciudad, telefono, descrpcion, tipo});       
        if (usuario){
            return res.json({text: "Usuario actulizado correctamente"});
        }else{
            return res.status(404).json({text: "Usuario no existe"});
        }        
    }
}

export const usuarioController = new UsuarioController();