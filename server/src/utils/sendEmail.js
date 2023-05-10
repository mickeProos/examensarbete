import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

const sendEmail = async(subject, message, send_to, sent_from) => {
    const transporter = nodemailer.createTransport({
      host: process.env.REACT_APP_EMAIL_HOST,
      port: "587",
      service: "hotmail",
      auth: {
        user: process.env.REACT_APP_EMAIL_USER,
        pass: process.env.REACT_APP_EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    const options = {
      from: sent_from,
      to: send_to,
      subject: subject,
      html: message
    }

    // Send Email
    transporter.sendMail(options, function (err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    });
}


export default sendEmail