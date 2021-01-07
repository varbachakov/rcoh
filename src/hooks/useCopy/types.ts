import { Dispatch } from 'react';

export type PropsTypes = {
  text: string
  initCopy?: boolean
}

export type ReturnTypes = [boolean, Dispatch<boolean>]
