import { stateVar, stateFunc } from './state';
import { ADD_FAVORITE, OPEN_MODAL, ADD_FAVORITE_START, GET_FAVORITE_HOOKS } from '@/src/constants/home';

export type PropsTypes = {
  children: JSX.Element
}

export type StateVarTypes = typeof stateVar
export type StateFuncTypes = typeof stateFunc

export interface StateTypes extends StateVarTypes, StateFuncTypes {}

export type ActionTypes = {
  type: typeof OPEN_MODAL | typeof ADD_FAVORITE | typeof ADD_FAVORITE_START | typeof GET_FAVORITE_HOOKS
  payload?: any
}
