const mongoose = require('mongoose')
const Schema = mongoose.Schema

const serviceSchema = new Schema({
    name: {
        type: String,
        default: 'Sin título',
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
    rewardImage: {
        type: String,
        default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg'
    },
    rating: {
        type: Number,
        default: 3
    },
    assistant: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    province: String,
}, {
    timestamps: true
})

const Service = mongoose.model('Service', serviceSchema)
module.exports = Service