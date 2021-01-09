import { SyntheticEvent } from 'react';
import { HooksTypes } from '@/pages/types';

export type PropsTypes = {
  hooks: HooksTypes
  hookName: string
  handleOpenModal: (e: SyntheticEvent) => void
}
