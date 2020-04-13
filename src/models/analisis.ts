import mongoose, {Schema, model} from 'mongoose';

export interface Analisis extends mongoose.Document {
    id: String;
    diagnostico: String;
    Solucion: String;
    idanalista: String;
    photoUrl: String;
    nombre: String;
    fecha: String;    
}

const AnslisisSchema = new Schema ({
    id: String,
    diagnostico: String,
    Solucion: String,
    idanalista: String,
    photoUrl: String,
    nombre: String,
    fecha: String,   
});

type NewType = Analisis;

export default model<NewType>('Analisis', AnslisisSchema);  