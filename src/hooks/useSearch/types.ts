import { ChangeEvent, RefObject, SyntheticEvent } from 'react';
import { HooksTypes } from '@/other/home-types';

export type PropsType = {
  isInputActive: boolean
  hooks: HooksTypes
  handleInputActive: (event: SyntheticEvent) => void
}
export type StateTypes = { value: string, searchList: HooksTypes, inputRef: RefObject<any> }
export type FuncTypes = (event: ChangeEvent<{value: string}>) => void

export type ReturnTypes = [StateTypes, FuncTypes]
