import { SyntheticEvent } from 'react';
import { HooksTypes } from '@/other/home-types';

export type PropsTypes = {
  list: HooksTypes
  value: string
  handleOpenModal: (event: SyntheticEvent) => void
}
