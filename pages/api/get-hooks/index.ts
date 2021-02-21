import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import middleware from '../../../middleware/all';
import { onError } from '../../../middleware/error';
import { getHooks } from '@/db/hook';
import { getHookName } from '@/src/utils';
import { RequestTypes } from '@/src/types';

const handler = nc<NextApiRequest, NextApiResponse>({
  onError
});

handler.use(middleware);

handler.post(async (req: RequestTypes, res: NextApiResponse) => {
  const hooks = await getHooks(req.db, req.user.id as string);
  const answer = getHookName(hooks);

  res.send({ data: answer });
});

export default handler;
