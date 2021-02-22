import { NextApiRequest, NextApiResponse } from 'next';

export const onError = async (error: Error, req: NextApiRequest, res: NextApiResponse): Promise<any> => {
  console.info('req', req);
  console.info('error', error);
  res.status(500).end();
};
