import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, email, phone, service, message } = JSON.parse(req.body);

    console.log({ name, email, phone, service, message });

    res.status(200).json({ data: 'Email sent successfully' });
  } catch (e) {
    res.status(400).json({ message: 'Data formatte incorrectly' });
  }
};
