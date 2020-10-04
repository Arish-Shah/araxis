import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, phone, topic, message } = JSON.parse(req.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'formsubmission.araxis@gmail.com',
      pass: 'Araxis@2020',
    },
  });

  await transporter.sendMail(
    {
      from: '"Form Submission" <formsubmission.araxis@gmail.com>',
      to: 'yashjha0007@gmail.com',
      subject: 'New Submission in Contact Form',
      text: name + ' submitted the contact form',
      html: `
        <h3>Details:</h3>
        <table>
          <tr>
            <th>Name</th>
            <td>${name}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>${email}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>${phone}</td>
          </tr>
          <tr>
            <th>Topic</th>
            <td>${topic}</td>
          </tr>
          <tr>
            <th>Message</th>
            <td>${message}</td>
          </tr>
        </table>
      `,
    },
    (error, info) => {
      if (error) {
        res.status(400).json({ message: 'Error Occured' });
      } else {
        res.status(200).json({ message: 'Email sent', ...info });
      }
    }
  );
};
