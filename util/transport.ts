import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: 'box5514.bluehost.com',
  port: 465,
  secure: true,
  auth: {
    user: 'no-reply@araxissystems.com',
    pass: 'Ar@xi$@123'
  }
});

export default transport;
