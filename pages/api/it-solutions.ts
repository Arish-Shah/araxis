import { NextApiRequest, NextApiResponse } from 'next';
import transporter from '../../util/transport';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, phone, service, message } = JSON.parse(req.body);
  
    await transporter.sendMail(
      {
        from: '"Form Submission" <formsubmission.araxis@gmail.com>',
        to: 'yashjha0007@gmail.com',
        subject: 'New Submission from IT Solutions',
        text: name + ' submitted the IT Solutions form',
        html: `
          <h2>New Submission:</h2>
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
              <th>Service</th>
              <td>${service}</td>
            </tr>
            <tr>
              <th>Message</th>
              <td>${message}</td>
            </tr>
          </table>
          <a href="mailto:${email}">Click here to reply</a>
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
  } else {
    res.status(400).json({ message: 'Unsupported Request Type' });
  }
};
