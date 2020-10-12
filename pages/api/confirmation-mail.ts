import { NextApiRequest, NextApiResponse } from 'next';
import transporter from '../../util/transport';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const email = JSON.parse(req.body);
    const valid = email?.trim() !== '';

    if (!valid) {
      res.status(400).json({ message: 'Incomplete Information' });
      return;
    }

    await transporter.sendMail(
      {
        from: '"Araxis" <noreply@araxissystems.com>',
        to: email,
        subject: 'Thank you for contacting Araxis',
        text: 'Your submission has been received, our team is working on it.',
        html: `
        <div style="text-align: center; padding: 1rem;">
          <h1 style="color: #1b1a4e; font-family: sans-serif; font-size: 2.75rem; padding: 1rem 0;">Thank You!</h1>
          <div style="font-family: sans-serif; font-size: 1rem; color: #4d4d4d;">
            <p>
              Your submission has been received, our team is working on it.
            </p>
            <p>
              We strive to respond as soon as possible.
            </p>
            <p>For further queries, feel free to reach us at info@araxissystems.com</p>
          </div>
        </div>
      `
      },
      (err, info) => {
        if (err) {
          res.status(400).json({ message: 'Error Occured', ...err });
        } else {
          res.status(200).json({ message: 'Email sent', ...info });
        }
      }
    );
  } else {
    res.status(400).json({ message: 'Unsupported Request Type' });
  }
}
