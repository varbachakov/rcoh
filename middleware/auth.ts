import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'next-auth/jwt';

type Request = NextApiRequest & {user: any}

export default async (req: Request, res: NextApiResponse, next: () => void): Promise<void> => {
  const token = await jwt.getToken({ req, secret: process.env.JWT_SECRET as string });

  if (token) {
    req.user = token;
    next();
  } else {
    res.status(401);
    res.end();
  }
};
