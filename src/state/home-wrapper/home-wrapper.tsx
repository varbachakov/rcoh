import { createContext, useContext, Context } from 'react';
import { useHome } from '@/src/hooks';
import { stateVar, stateFunc } from './state';
import { PropsTypes, StateTypes } from './types';

export const HomeContext: Context<StateTypes> = createContext({
  ...stateVar,
  ...stateFunc
});

export const HomeWrapper = ({ children }: PropsTypes): JSX.Element => {
  const [state] = useHome({
    ...stateVar,
    ...stateFunc
  });

  return <HomeContext.Provider value={{ ...state }}>{children}</HomeContext.Provider>;
};

export const useHomeState = (): StateTypes => {
  return useContext(HomeContext);
};
