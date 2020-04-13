import {Request, Response} from 'express';

import DevolucionModel , { Devolucion } from '../models/devolucion';

class DevolucionController {

    public async saveDevolucion (req: Request, res: Response){
        const {idinc, fecha, iddevolucion} = req.body;
        const Devolucion: Devolucion = new DevolucionModel({idinc, fecha, iddevolucion});
        await Devolucion.save();
        return res.json({text: "Devolucion correctamente"});
    }

}

export const devolucionController = new DevolucionController();