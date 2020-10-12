import { NextApiRequest, NextApiResponse } from 'next';
import transporter from '../../util/transport';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      website,
      needs,
      communications
    } = JSON.parse(req.body);
    const valid =
      firstName?.trim() !== '' &&
      lastName?.trim() !== '' &&
      email?.trim() !== '' &&
      phone?.trim() !== '' &&
      company?.trim() !== '' &&
      website?.trim() !== '' &&
      needs?.trim() !== '';

    if (!valid) {
      res.status(400).json({ message: 'Incomplete Information' });
      return;
    }

    await transporter.sendMail(
      {
        from: '"Araxis" <formsubmission.araxis@gmail.com>',
        to: 'mohammedazharuddin100@gmail.com',
        subject: 'New Submission on For Recruiters Page',
        text: firstName + ' submitted the recruiters form',
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
              <th>Company</th>
              <td>${company}</td>
            </tr>
            <tr>
              <th>Website</th>
              <td>${website}</td>
            </tr>
            <tr>
              <th>Needs</th>
              <td>${needs}</td>
            </tr>
            <tr>
              <th>Receive Communications</th>
              <td>${communications}</td>
            </tr>
          </table>
        `
      },
      (error, info) => {
        if (error) {
          res.status(400).json({ message: 'Error Occured', ...error });
        } else {
          res.status(200).json({ message: 'Email sent', ...info });
        }
      }
    );
  } else {
    res.status(400).json({ message: 'Unsupported Request Type' });
  }
};
