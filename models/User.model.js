const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        default: 'Usuario',
        required: true
    },
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
    userRatings: {
        type: [Number],
        default: [3]
    },
    province: {
        type: String,
        enum: ['Álava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Ávila', 'Badajoz', 'Baleares', 'Barcelona', 'Burgos', 'Cáceres',
            'Cádiz', 'Cantabria', 'Castellón', 'Ceuta', 'Ciudad Real', 'Córdoba', 'La Coruña', 'Cuenca', 'Gerona', 'Granada', 'Guadalajara',
            'Guipúzcoa', 'Huelva', 'Huesca', 'Jaén', 'León', 'Lérida', 'Lugo', 'Madrid', 'Málaga', 'Melilla', 'Murcia', 'Navarra',
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
