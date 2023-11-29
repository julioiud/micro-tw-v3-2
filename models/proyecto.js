const { Schema, model } = require('mongoose');

const ProyectoSchema = Schema({
    numero: {
        type: String,
        required: [true, 'Debe colocar un número'],
        unique: [true, 'Consecutivo del proyecto debe ser único']
    },
    // TODO: COLOCAR resto de atributos
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    tipoProyecto: {
        type: Schema.Types.ObjectId,
        ref: 'TipoProyecto',
        required: true
    }
    // TODO: RESTO DE OBJETOS
});

module.exports = model('Proyecto', ProyectoSchema);
/*
{
    "numero" : "1234567890",
    "cliente" : {
        "_id" : "654c22edf267494bb9f199b9"
    },
    "tipoProyecto" : {
       "_id" : "654c206d12086cb83e692eb8"
    }
}*/