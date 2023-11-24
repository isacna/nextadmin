import mongoose from "mongoose";

const rompimentoSchema = new mongoose.Schema({
    id : {
        type: Number,
        require: true,
        unique: true
    },
    cidade: {
        type: Array,
        require: true
    },
    bairros: {
        type: Array,
        require: true
    },
    ceps: {
        type: Array,
        require: true,
        select: false
    },
    previsao: {
        type: String,
        require: true
    },
    quantidade_assinantes: {
        type: Number,
        require: true
    },
    assinantes: {
        type: Array,
        require: true,
        select: false
    },
    contatos: {
        type: Array,
        require: true,
        select: false
    },
    quantidade_contatos: {
        type: Number,
        require: true,
    },
    status: {
        type: String,
        required: true 
    },
    sms_enviado: {
        type: Boolean,
        default: false
    },
    lembrete_enviado: {
        type: Boolean,
        default: false
    },
    data_abertura: {
        type: Date,
        default: Date.now
    },
    finalizado: {
        type: Boolean,
        default: false
    },
    finalizado_hora: {
        type: Date
    },
    finalizado_motivo: {
        type: String
    },
    infoPON: {
        type: Object
    }
});

export const dbRompimento = mongoose.models.dbRompimento || mongoose.model("dbRompimento", rompimentoSchema);


