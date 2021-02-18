const mongoose = require('mongoose')
const Schema = mongoose.Schema

const serviceSchema = new Schema({
    name: {
        type: String,
        default: 'Servicio',
        require: true,
    },
    description: String,
    situation: {
        type: String,
        enum: ['Pendiente de ayuda', 'En conversaciones', 'Ayuda recibida'],
        default: 'Pendiente de ayuda'
    },
    reward: {
        type: String,
        default: 'Por determinar',
        require: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})

const Service = mongoose.model('Service', serviceSchema)
module.exports = Service