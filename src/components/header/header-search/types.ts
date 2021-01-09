import { SyntheticEvent } from 'react';
import { HooksTypes } from '@/other/home-types';

export type PropsType = {
  isInputActive: boolean
  hooks: HooksTypes
  handleInputActive: (event: SyntheticEvent) => void
  handleOpenModal: (event: SyntheticEvent) => void
}
