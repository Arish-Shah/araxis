import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

async function main() {
  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: 'yashjha0007@gmail.com',
      pass: 'iamyashjha',
    },
  });

  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: 'arish0246@gmail.com', // list of receivers
    subject: 'Test Message from nodemailer', // Subject line
    text: 'How we doing?', // plain text body
    html: '<b>Hello world?</b>', // html body
  });

  return info;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const info = await main();
  await res.status(200).json({ message: 'Message sent: ' + info.messageId });
};
