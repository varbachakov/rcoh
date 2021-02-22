import { Db } from 'mongodb';

export const getUserById = async (db: Db, id: string):Promise<any> => db.collection('users').findOne({ _id: id });
