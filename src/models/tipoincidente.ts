import mongoose, {Schema, model} from 'mongoose';

export interface TipoIncidente extends mongoose.Document {
    numero: Number;
    nombre: String

}

const TipoIncidenteSchema = new Schema ({
    numero: Number,
    nombre: String
});

type NewType = TipoIncidente;

export default model<NewType>('TipoIncidencia', TipoIncidenteSchema);  