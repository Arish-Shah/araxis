import { NextApiRequest, NextApiResponse } from 'next';
import transporter from '../../util/transport';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const {
      firstName,
      lastName,
      phone,
      email,
      linkedin,
      resume,
      communications
    } = JSON.parse(req.body);
    const valid =
      firstName?.trim() !== '' &&
      lastName?.trim() !== '' &&
      resume?.content &&
      resume?.filename &&
      resume?.encoding;

    if (!valid) {
      res.status(400).json({ message: 'Incomplete Information' });
    }

    await transporter.sendMail(
      {
        from: '"Araxis" <noreply@araxissystems.com>',
        to: 'info@araxissystems.com',
        subject: 'New Submission on For Seekers Page',
        text: firstName + ' submitted the seekers form',
        html: `
          <h2>New Submission:</h2>
          <table>
            <tr>
              <th>Name</th>
              <td>${firstName} ${lastName}</td>
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
              <th>LinkedIn URL</th>
              <td>${linkedin}</td>
            </tr>
            <tr>
              <th>Communications</th>
              <td>${communications}</td>
            </tr>
          </table>
        `,
        attachments: [resume]
      },
      (error, info) => {
        if (error) {
          await res.status(400).json({ message: 'Error Occured', ...error });
        } else {
          res.status(200).json({ message: 'Email sent', ...info });
        }
      }
    );
  } else {
    res.status(400).json({ message: 'Unsupported Request Type' });
  }
};
