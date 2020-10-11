import { NextApiRequest, NextApiResponse } from 'next';
import transporter from '../../util/transport';
import confirmationMail from '../../util/confirmation-mail';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, phone, service, message } = JSON.parse(req.body);
    const valid =
      name?.trim() !== '' && email?.trim() !== '' && phone?.trim() !== '';

    if (!valid) {
      res.status(400).json({ message: 'Incomplete Information' });
      return;
    }

    await transporter.sendMail(
      {
        from: '"Araxis" <noreply@araxissystems.com>',
        to: 'info@araxissystems.com',
        subject: 'New Submission on IT Solutions',
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
        `
      },
      (error, info) => {
        if (error) {
          res.status(400).json({ message: 'Error Occured', ...error });
        } else {
          confirmationMail(email);
          res.status(200).json({ message: 'Email sent', ...info });
        }
      }
    );
  } else {
    res.status(400).json({ message: 'Unsupported Request Type' });
  }
};
