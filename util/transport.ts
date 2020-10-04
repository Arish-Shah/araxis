import nodemailer from 'nodemailer';

export default nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'formsubmission.araxis@gmail.com',
    pass: 'Araxis@2020',
  },
});
