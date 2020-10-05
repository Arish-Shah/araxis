import { NextApiRequest, NextApiResponse } from 'next';
import transporter from '../../util/transport';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    firstName,
    lastName,
    phone,
    email,
    linkedin,
    resume,
    communications,
  } = JSON.parse(req.body);

  await transporter.sendMail(
    {
      from: '"Form Submission" <formsubmission.araxis@gmail.com>',
      to: 'yashjha0007@gmail.com',
      subject: 'New Submission from Seekers',
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
        <a href="mailto:${email}">Click here to reply</a>
      `,
      attachments: [resume],
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
