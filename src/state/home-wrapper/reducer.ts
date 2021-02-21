import { StateVarTypes, ActionTypes } from './types';
import { OPEN_MODAL, ADD_FAVORITE, ADD_FAVORITE_START, GET_FAVORITE_HOOKS } from '@/src/constants/home';

export function rootReducer(state: StateVarTypes, action: ActionTypes): StateVarTypes {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
        hookName: action.payload,
      };
    case ADD_FAVORITE:
      return {
        ...state,
        favoriteHooks: action.payload,
        isFavoriteRequest: false
      };
    case ADD_FAVORITE_START:
      return {
        ...state,
        isFavoriteRequest: true,
      };
    case GET_FAVORITE_HOOKS:
      return {
        ...state,
        favoriteHooks: action.payload,
      };
    default:
      return state;
  }
}
