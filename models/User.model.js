const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        default: 'Usuario',
        required: true
    },
    rating: Number,

    // service: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Service'
    // },

    age: {
        type: Number,
        min: 18
    },

    image: {
        type: String,
        default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg'
    },
    username: {
        type: String,
        default: 'Usuario',
        required: true
    },
    password: String,
    role: {
        type: String,
        enum: ['ADMIN', 'USER', 'GUEST'],
        default: 'GUEST'
    },
    email: String,
    savedServices: [{
        type: Schema.Types.ObjectId,
        ref: 'Service'
    }],
    province: {
        type: String,
        enum: ['Álava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Ávila', 'Badajoz', 'Barcelona', 'Burgos', 'Cáceres',
            'Cádiz', 'Cantabria', 'Castellón', 'Ciudad Real', 'Córdoba', 'La Coruña', 'Cuenca', 'Gerona', 'Granada', 'Guadalajara',
            'Guipúzcoa', 'Huelva', 'Huesca', 'Islas Baleares', 'Jaén', 'León', 'Lérida', 'Lugo', 'Madrid', 'Málaga', 'Murcia', 'Navarra',
            'Orense', 'Palencia', 'Las Palmas', 'Pontevedra', 'La Rioja', 'Salamanca', 'Segovia', 'Sevilla', 'Soria', 'Tarragona',
            'Santa Cruz de Tenerife', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza']
    },
    location: {
        type: {
            type: String,
            default: 'Point'
        },
        coordinates: [Number]
    }
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User
