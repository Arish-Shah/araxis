import { NextApiRequest, NextApiResponse } from 'next';
import transporter from '../../util/transport';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    company,
    website,
    needs,
    communications,
  } = JSON.parse(req.body);

  await transporter.sendMail(
    {
      from: '"Form Submission" <formsubmission.araxis@gmail.com>',
      to: 'yashjha0007@gmail.com',
      subject: 'New Submission from Recruiters',
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
};
