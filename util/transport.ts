import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'formsubmission.araxis@gmail.com',
    pass: 'Araxis@2020',
  },
});

export default transport;
