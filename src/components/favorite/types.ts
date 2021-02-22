import { Session } from 'next-auth/client';

export type PropsTypes = {
  addFavoriteHook: (hookName: string, userId: string) => void
  hookName: string
  loading: boolean
  isFavoriteRequest: boolean,
  favoriteHooks: string[] | null,
  session?: Session | null
}
