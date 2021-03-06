const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'takfaiho5@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app , ${name} , Let me know how you get along with the app`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'takfaiho5@gmail.com',
        subject: 'Your account has been deleted',
        text: `Hello ${name} , your account has been removed, 898.`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}