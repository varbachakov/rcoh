import { User } from 'next-auth';

export type UserTypes = User & {id?: string}
