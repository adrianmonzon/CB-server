const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
// const { checkId } = require('./middlewares')

const Service = require('../models/Service.model')
const User = require('../models/User.model')


router.get('/getAllServices', (req, res) => {

    Service
        .find()
        .populate('owner')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get('/filterByProvince/:province', (req, res) => {

    Service
        .find({ province: req.params.province })
        .populate('owner')
        .then(response => {
            res.json(response)
        })
        .catch(err => res.status(500).json(err))

})

router.get('/filterBySituation/:situation', (req, res) => {

    Service
        .find({ situation: req.params.situation })
        .populate('owner')
        .then(response => {
            res.json(response)
        })
        .catch(err => res.status(500).json(err))

})

// router.get('/filterBySituationProvince/:situation&:province', (req, res) => {

//     Service
//         .find({ situation: req.params.situation, province: req.params.province })
//         .populate('owner')
//         .then(response => {
//             res.json(response)
//         })
//         .catch(err => res.status(500).json(err))

// })

router.get('/getOneService/:service_id', /*checkId,*/(req, res) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.service_id)) {
        res.status(404).json({ message: 'Invalid ID' })
        return
    }

    Service
        .findById(req.params.service_id)
        .populate('owner')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get('/getAllServicesFromUser/:user_id', (req, res) => {

    const userOwnedService = Service
        .find({ owner: req.params.user_id })
        .populate('owner')
    const userFavServices = User
        .findOne({ _id: req.params.user_id }, 'savedServices')
        .populate({
            path: 'savedServices',
            populate: { path: 'owner' }
        })

    Promise.all([userOwnedService, userFavServices])
        .then(result => res.json({
            owned: result[0], favs: result[1].savedServices
        }))
})

router.post('/newService', (req, res) => {

    Service
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put('/editService/:service_id', (req, res) => {

    Service
        .findByIdAndUpdate(req.params.service_id, req.body, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.delete("/deleteService/:service_id", (req, res) => {

    Service
        .findByIdAndDelete(req.params.service_id)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({ message: 'Not possible to delete' }))
})

module.exports = router