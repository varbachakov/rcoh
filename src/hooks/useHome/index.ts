import { useReducer, useCallback, SyntheticEvent } from 'react';
import { rootReducer } from '@/src/state/home-wrapper';
import { ADD_FAVORITE, OPEN_MODAL, ADD_FAVORITE_START, GET_FAVORITE_HOOKS } from '@/src/constants/home';
import { ReturnTypes, PropsTypes } from './types';

export function useHome(initialState: PropsTypes): ReturnTypes {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  const handleOpenModal = useCallback((event: SyntheticEvent) => {
    const { dataset } = (event.currentTarget as HTMLButtonElement);
    const payload = dataset && dataset.hookname ? dataset.hookname : '';
    dispatch({ type: OPEN_MODAL, payload });
  }, []);

  const addFavoriteHook = useCallback(async (hookName) => {
    dispatch({ type: ADD_FAVORITE_START });

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/hook/`, {
      method: 'POST',
      body: JSON.stringify({ hookName }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const { data } = await res.json();
    dispatch({ type: ADD_FAVORITE, payload: data });
  }, []);

  const addSessionHooks = useCallback((sessionHooks) => {
    dispatch({ type: ADD_FAVORITE, payload: sessionHooks });
  }, []);

  const getFavoriteHooks = useCallback(async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/get-hooks/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const { data } = await res.json();

    dispatch({ type: GET_FAVORITE_HOOKS, payload: data });
  }, []);

  return [{ ...state, handleOpenModal, addFavoriteHook, addSessionHooks, getFavoriteHooks }];
}
