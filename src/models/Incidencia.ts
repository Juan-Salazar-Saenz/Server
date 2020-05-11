import mongoose, {Schema, model} from 'mongoose';

export interface Incidencia extends mongoose.Document {
    coim: String,
    nombre: String;
    descripcion: String;
    fecha: String;
    tema: String;
    tipo: String;
    usuario: String;
    estado: Number;
}

const IncidenciaSchema = new Schema ({
    coim: String,
    nombre: String,
    descripcion: String,
    fecha: String,
    tema: String,
    tipo: String,
    usuario: String,
    estado: Number
});

type NewType = Incidencia;

export default model<NewType>('Incidencia', IncidenciaSchema); 