const express = require('express')
const router = express.Router()

const transporter = require('./../configs/nodemailer.config')

router.post('/send-email', (req, res) => {

    const { contactEmail, subject, message, sender } = req.body

    console.log(`Este es el req.body`, req.body)

    transporter
        .sendMail({
            from: sender,
            to: contactEmail,
            subject,
            text: message,
            html: `<b>${message}</b>`
        })
        .then(info => res.json(info))
        .catch(err => res.status(500).json(err))
})


module.exports = router