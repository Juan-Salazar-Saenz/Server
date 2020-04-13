import {Request, Response} from 'express';

import IncidenciaModel , { Incidencia } from '../models/Incidencia';

class EstadoOneController {

    public async list(req: Request ,res: Response){
        const incidencia : Incidencia[] = await IncidenciaModel.find();
        return res.json(incidencia);
    }

    public async list1(req: Request ,res: Response){
        const { estado } = req.params; 
        const incidencia : Incidencia[] = await IncidenciaModel.find({'estado': Number.parseInt(estado)});
        return res.json(incidencia);
    }

    public async saveIncidencia (req: Request, res: Response){
        const {coim, nombre, descripcion, fecha, tema, tipo ,usuario ,estado} = req.body;
        const incidencia: Incidencia = new IncidenciaModel({coim, nombre, descripcion, fecha, tema, tipo ,usuario ,estado});
        await incidencia.save();
        return res.json({text: "Incidencia Creada correctamente"});
    }

    public async getOne (req: Request ,res: Response): Promise<any> {
        const { id } = req.params;        
        const incidencia = await IncidenciaModel.findById(id);
        if (incidencia){
            return res.json(incidencia);
        }else{
            return res.status(404).json({text: "Incidencia no existe"});
        }        
    }

    public async getOne2 (req: Request ,res: Response): Promise<any> {
        const { coim } = req.params;        
        const incidencia = await IncidenciaModel.find({'coim': coim});
        if (incidencia){
            console.log(incidencia);
            return res.json(incidencia);
        }else{
            return res.status(404).json({text: "Incidencia no existe"});
        }        
    }

    public async Delete (req: Request ,res: Response): Promise<any> {
        const { id } = req.params;        
        const incidencia = await IncidenciaModel.findByIdAndDelete(id);       
        if (incidencia){
            return res.json({text: "Incidencia eliminada correctamente"});
        }else{
            return res.status(404).json({text: "Incidencia no existe"});
        }        
    }

    public async Update (req: Request ,res: Response): Promise<any> {
        const { id } = req.params;  
        const {coim, nombre, descripcion, fecha, tema, tipo ,usuario ,estado} = req.body;      
        const incidencia = await IncidenciaModel.findByIdAndUpdate(id,{coim, nombre, descripcion, fecha, tema, tipo ,usuario ,estado});       
        if (incidencia){
            return res.json({text: "Incidencia actulizada correctamente"});
        }else{
            return res.status(404).json({text: "Incidencia no existe"});
        }        
    }

    public async siguienteFase (req: Request ,res: Response): Promise<any> {
        const { id } = req.params;  
        console.log(req.body);
        const { estado } = req.body;      
        const incidencia = await IncidenciaModel.findByIdAndUpdate(id,{"estado": estado});       
        if (incidencia){
            return res.json({text: "Incidencia actulizada correctamente"});
        }else{
            return res.status(404).json({text: "Incidencia no existe"});
        }        
    }
}

export const estadoOneController = new EstadoOneController();