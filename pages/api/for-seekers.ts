import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    console.log(req.body);
    res.status(200).json({ data: 'Email sent successfully' });
  } catch (e) {
    res.status(400).json({ message: 'Data formatte incorrectly' });
  }
};
