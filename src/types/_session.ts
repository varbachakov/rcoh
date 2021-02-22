import { Session } from 'next-auth';

export type SessionTypes = Session & {user: {id?: string, hooks?: string[]}}
