import { StateVarTypes, ActionTypes } from './types';
import { OPEN_MODAL } from '@/src/constants/home';

export function rootReducer(state: StateVarTypes, action: ActionTypes): StateVarTypes {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
        hookName: action.payload,
      };
    default:
      return state;
  }
}
