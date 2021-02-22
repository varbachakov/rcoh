import { NextApiRequest, NextApiResponse  } from 'next';
import { Db, MongoClient } from 'mongodb';
import { connectToDB } from '@/db/connect';

type Request = NextApiRequest & {db: Db, dbClient: MongoClient}

export default async function database(req: Request, _: NextApiResponse, next: () => void): Promise<void> {
  const { db, dbClient } = await connectToDB() as Request;
  req.db = db;
  req.dbClient = dbClient;

  next();
}
