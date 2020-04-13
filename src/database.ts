import mongoose from 'mongoose';
import { mongodb } from './keys';

mongoose.connect(mongodb.URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(db => console.log("conectado a la base de mongo de atlas"))
.catch(err => console.log(err));