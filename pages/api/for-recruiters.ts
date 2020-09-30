import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
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

    console.log({
      firstName,
      lastName,
      email,
      phone,
      company,
      website,
      needs,
      communications,
    });

    res.status(200).json({ data: 'Email sent successfully' });
  } catch (e) {
    res.status(400).json({ message: 'Data formatte incorrectly' });
  }
};
