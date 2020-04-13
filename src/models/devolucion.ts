import mongoose, {Schema, model} from 'mongoose';

export interface Devolucion extends mongoose.Document {
    idinc: String,    
    fecha: String;    
    iddevolucion: String;
}

const DevolucionSchema = new Schema ({
    idinc: String,
    fecha: String,
    iddevolucion: String,    
});

type NewType = Devolucion;

export default model<NewType>('Devolucion', DevolucionSchema);  