import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import middleware from '../../../middleware/all';
import { onError } from '../../../middleware/error';
import { createHook, deleteHook, checkHook, getHooks } from '@/db/hook';
import { getHookName } from '@/src/utils';
import { RequestTypes } from '@/src/types';

const handler = nc<NextApiRequest, NextApiResponse>({
  onError
});

handler.use(middleware);

handler.post(async (req: RequestTypes, res: NextApiResponse) => {
  const isHook = await checkHook(req.db, { createdBy: req.user.id as string, hookName: req.body.hookName });
  if (isHook === null) {
    await createHook(req.db, { ...req.body, createdBy: req.user.id });
  } else {
    await deleteHook(req.db, { createdBy: req.user.id as string, hookName: req.body.hookName });
  }

  const hooks = await getHooks(req.db, req.user.id as string);
  const answer = getHookName(hooks);

  res.send({ data: answer });
});

export default handler;
