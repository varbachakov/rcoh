import { ChangeEvent } from 'react';
import { HooksTypes } from '@/other/home-types';

export type PropsType = {
  hooks: HooksTypes
  isModalOpen: boolean
}
export type StateTypes = { value: string, searchList: HooksTypes }
export type FuncTypes = {
  handleChange: (event: ChangeEvent<{value: string}>) => void
  handleClear: () => void
}

export type ReturnTypes = [StateTypes, FuncTypes]
