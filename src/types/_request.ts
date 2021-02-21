import { NextApiRequest } from 'next';
import { Db } from 'mongodb';
import { UserTypes } from '@/src/types';

export type RequestTypes = NextApiRequest & {db: Db} & {user: UserTypes}
