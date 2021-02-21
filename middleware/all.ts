import { NextApiRequest, NextApiResponse } from 'next';
// TODO deaclare type
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import nc from 'next-connect';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import db from './db';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import auth from './auth';

const middleware = nc<NextApiRequest, NextApiResponse>();

middleware.use(db).use(auth);

export default middleware;
