import mongoose, {Schema, model} from 'mongoose';

export interface Usuario extends mongoose.Document {
    id: String;
    nombreCompleto: String;
    email: String;
    photoUrl: String;
    nombres: String;
    apeliidos: String;
    ciudad: String;
    telefono: Number;
    descrpcion: String;
    tipo: Number;
}

const UsuarioSchema = new Schema ({
    id: String,
    nombreCompleto: String,
    email: String,
    photoUrl: String,
    nombres: String,
    apeliidos: String,
    ciudad: String,
    telefono: Number,
    descrpcion: String,
    tipo: Number,
});

type NewType = Usuario;

export default model<NewType>('Usuario', UsuarioSchema);  