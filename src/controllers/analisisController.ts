import {Request, Response} from 'express';

import AnalisisModel , { Analisis } from '../models/analisis';

class AnalisisController {

    public async saveAnalisis (req: Request, res: Response){
        const {id, diagnostico, Solucion, idanalista, photoUrl, nombre, fecha} = req.body;
        const Analisis: Analisis = new AnalisisModel({id, diagnostico, Solucion, idanalista, photoUrl, nombre, fecha});
        await Analisis.save();
        return res.json({text: "Analisis guardado correctamente"});
    }

}

export const analisisController = new AnalisisController();