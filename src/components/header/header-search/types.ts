import { SyntheticEvent } from 'react';
import { HooksTypes } from '@/other/home-types';

export type PropsType = {
  hooks: HooksTypes
  isModalOpen: boolean
  handleOpenModal: (event: SyntheticEvent) => void
}
