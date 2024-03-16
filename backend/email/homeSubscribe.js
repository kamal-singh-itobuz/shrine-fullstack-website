import nodemailer from 'nodemailer';
import dotenv from 'dotenv'
dotenv.config();

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'kamal@itobuz.com',
        pass: process.env.EMAIL_PASSWORD,
    },
});


export async function sendEmail(email) {
    const info = await transporter.sendMail({
        from: '"Kamal Singh" <kamal@itobuz.com>',
        to: `${email}`,
        subject: "Hello, Now you are premium user✔",
        html: "<b>Hello world?</b>",
    });
}