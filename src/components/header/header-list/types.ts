import { SyntheticEvent } from 'react';
import { HooksTypes } from '@/other/home-types';

export type PropsType = {
  list: HooksTypes
  handleOpenModal: (event: SyntheticEvent) => void
}
