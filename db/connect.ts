import { Db, MongoClient } from 'mongodb';

global.mongo = global.mongo || {};

export const connectToDB = async (): Promise<any> => {
  if (!global.mongo.client) {
    global.mongo.client = new MongoClient(process.env.DATABASE_URL as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferMaxEntries: 0,
      connectTimeoutMS: 10000,
    });

    console.info('connecting to DB');
    await global.mongo.client.connect();
    console.info('connected to DB');
  }

  const db: Db = global.mongo.client.db('rcoh');

  return { db, dbClient: global.mongo.client };
};
