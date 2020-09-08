import { NextApiRequest, NextApiResponse } from 'next';

interface IBody {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  company: string;
  website: string;
  needs: string;
  communications: boolean;
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const body: IBody = JSON.parse(req.body);
  }
  res.status(200).json({ message: 'Email sent successfully' });
};
