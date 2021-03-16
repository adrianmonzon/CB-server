const express = require('express')
const router = express.Router()

const transporter = require('../configs/nodemailer.config')


// router.get('/send-email', (req, res) => res.render('send-email'))

router.post('/send-email', (req, res) => {

    const { contactEmail, subject, message } = req.body

    console.log(req.body)

    transporter
        .sendMail({
            from: '"Caixabank Acción Social " <musiclandironhack@gmail.com>',
            to: contactEmail,
            subject,
            text: message,
            html: `<b>${message}</b>`
        })
        .then(info => {
            console.log(info)
            res.json(info)})
        .catch(err => res.status(500).json(err))
})


module.exports = router