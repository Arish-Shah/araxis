import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: 'mail.araxissystems.com ',
  port: 465,
  secure: true,
  auth: {
    user: 'noreply@araxissystems.com',
    pass: 'Araxis@2020'
  }
});

export default transport;
