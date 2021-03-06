const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const User = require('../models/User.model')


router.get('/getAllUsers', (req, res) => {

    User
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get('/getOneUser/:user_id', (req, res) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.user_id)) {
        res.status(404).json({ message: 'Invalid ID' })
        return
    }

    User
        .findById(req.params.user_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// router.post('/newUser', (req, res) => {

//     User
//         .create(req.body)
//         .then(response => res.json(response))
//         .catch(err => res.status(500).json(err))
// })

router.put('/editUser/:user_id', (req, res) => {

    User
        .findByIdAndUpdate(req.params.user_id, req.body, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put('/saveService/:service_id', (req, res) => {

    User
        .findByIdAndUpdate(req.body.userId, { $push: { savedServices: req.params.service_id } }, { new: true })
        .then(response => {
            console.log(`Aquí los servicios guardados ${response}`)
            res.json(response)
        })
        .catch(err => res.status(500).json(err))
})

router.put('/removeService/:service_id', (req, res) => {

    User
        .findByIdAndUpdate(req.body.userId, { $pull: { savedServices: req.params.service_id } }, { new: true })
        .then(response => {
            console.log(`Servicios favs después de eliminar ${response}`)
            res.json(response)})
        .catch(err => res.status(500).json(err))
})

router.delete("/deleteUser/:user_id", (req, res) => {

    User
        .findByIdAndDelete(req.params.user_id)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({ message: 'Not possible to delete' }))
})

module.exports = router