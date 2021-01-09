import { useReducer, useCallback, SyntheticEvent } from 'react';
import { rootReducer } from '@/src/state/home-wrapper';
import { OPEN_MODAL } from '@/src/constants/home';
import { ReturnTypes, PropsTypes } from './types';

export function useHome(initialState: PropsTypes): ReturnTypes {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  const handleOpenModal = useCallback((event: SyntheticEvent) => {
    const { dataset } = (event.currentTarget as HTMLButtonElement);
    const payload = dataset && dataset.hookname ? dataset.hookname : '';
    dispatch({ type: OPEN_MODAL, payload });
  }, []);

  return [{ ...state, handleOpenModal }];
}
