const mongoose = require('mongoose');
const Service = require('../models/Service.model');

const dbtitle = 'caixabankAppDB';
mongoose.connect(`mongodb://localhost/${dbtitle}`), { useUnifiedTopology: true, useNewUrlParser: true }

Service.collection.drop()


const services = [
    {
        name: 'Traerme la compra a casa',
        description: 'Por favor, necesito que alguien me haga la compra y me la traiga a casa. Gracias.',
        reward: 'Tarta casera'
    },

    {
        name: 'Cuidar a mis perros',
        description: 'Este fin de semana voy a estar fuera y necesito que alguien se haga cargo de mis perros, gracias.',
        reward: 'Jersey de lana cosido a mano'
    },

    {
        name: 'Comprarme el pan',
        description: 'El panadero ha venido ya a repartir y no me he enterado, por favor, necesitaría que alguien me comprase el pan.',

    },

    {
        name: 'Traerme tarta encargada',
        description: 'Encargué una tarta hace dos días y me han avisado de que ya está lista, necesitaría que alguien fuese a por ella y me la trajera.',
        reward: 'Jarrón de cerámica'

    },

    {
        name: 'Necesito estufa de gas',
        description: 'Me he quedado sin luz y necesito que alguien me traiga una estufa de gas, la bombona ya la tengo. Gracias.',

    },

    {
        name: 'Agua mineral',
        description: 'Se me ha acabado el agua mineral y no puedo cargar con el peso de las botellas, necesito a alguien que me las pueda traer. Gracias de antemano.',
        reward: 'Bizcocho recién hecho'

    }
]


Service
    .create(services)
    .then(allServicesCreated => {
        console.log(`Created ${allServicesCreated.length} services`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Hubo un error,', err))





