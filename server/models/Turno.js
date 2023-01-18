import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    fecha: {
        type: Date,
        required: true,
        trim: true
    },
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    telefono:{
        type: Number,
        required: true
    }
})

export default mongoose.model('Turno', postSchema)