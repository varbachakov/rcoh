import { SyntheticEvent } from 'react';
import { HooksTypes } from '@/other/home-types';

export type PropsTypes = {
  hooks: HooksTypes
  hookName: string
  handleOpenModal: (e: SyntheticEvent) => void
}
