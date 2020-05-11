import mongoose, {Schema, model} from 'mongoose';

export interface TipoIncidente extends mongoose.Document {
    nombre: String
}

const TipoIncidenteSchema = new Schema ({
    nombre: String
});

type NewType = TipoIncidente;

export default model<NewType>('TipoIncidencia', TipoIncidenteSchema);  