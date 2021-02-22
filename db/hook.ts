import { Db } from 'mongodb';
import { nanoid } from 'nanoid';

export const createHook = async (db: Db, hook: { createdBy: string, name: string}): Promise<any> => {
  return await db.collection('hooks').insertOne({
    _id: nanoid(),
    ...hook,
    createdAt: new Date().toDateString()
  }).then(({ ops }) => ops[0]);
};

export const deleteHook = async (db: Db, hook: {createdBy: string, hookName: string}): Promise<any> => {
  return await db.collection('hooks').deleteOne(hook);
};

export const getHooks = async (db: Db, userId: string): Promise<any> => db.collection('hooks').find({ createdBy: userId }).toArray();

export const checkHook = async (db: Db, hook: {createdBy: string, hookName: string}): Promise<any> => {
  return await db.collection('hooks').findOne(hook);
};

