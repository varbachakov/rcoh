import { stateVar, stateFunc } from './state';
import { OPEN_MODAL } from '@/src/constants/home';

export type PropsTypes = {
  children: JSX.Element
}

export type StateVarTypes = typeof stateVar
export type StateFuncTypes = typeof stateFunc

export interface StateTypes extends StateVarTypes, StateFuncTypes {}

export type ActionTypes = {
  type: typeof OPEN_MODAL
  payload?: any
}
