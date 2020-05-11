import {Request, Response} from 'express';

import TipoIncidenteModel , { TipoIncidente } from '../models/tipoincidente';

class TipoIncidenteController {

    public async list(req: Request ,res: Response){
        const tipoIncidente : TipoIncidente[] = await TipoIncidenteModel.find();
        return res.json(tipoIncidente);
    }

    public async saveTipoincidente (req: Request, res: Response){
        const {nombre} = req.body;
        const tipoIncidente: TipoIncidente = new TipoIncidenteModel({nombre});
        await tipoIncidente.save();
        return res.json({text: "Tipo de incidente guardado correctamente"});
    }
}

export const tipoIncidenteController = new TipoIncidenteController();