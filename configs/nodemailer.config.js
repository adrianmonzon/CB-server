const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
        host: 'smtp.servidor-correo.net',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAILUSER,
            pass: process.env.EMAILPWD
        }
})


module.exports = transporter