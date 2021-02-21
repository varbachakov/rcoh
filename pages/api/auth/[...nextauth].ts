import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { InitOptions, PageOptions  } from 'next-auth';
import Providers from 'next-auth/providers';
import { UserTypes, SessionTypes } from '@/src/types';

const options: InitOptions = {
  session: {
    jwt: true,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    } as {clientId: string, clientSecret: string})
  ],
  database: process.env.DATABASE_URL,
  secret: process.env.SECRET,
  pages: {
    home: '/'
  } as PageOptions & {home: string},
  callbacks: {
    async session(session: SessionTypes, user: UserTypes): Promise<SessionTypes> {
      session.user.id = user.id;

      return session;
    },
    async jwt(tokenPayload, user: UserTypes) {
      if (tokenPayload && user) {
        return { ...tokenPayload, id: `${user.id}` };
      }

      return tokenPayload;
    },
  },
};

export default (req: NextApiRequest, res: NextApiResponse): Promise<void> => NextAuth(req, res, options);
