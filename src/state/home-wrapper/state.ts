import { SyntheticEvent } from 'react';

export const stateVar = {
  isModalOpen: false,
  hookName: '',
  favoriteHooks: null,
  isFavoriteRequest: false
};

export const stateFunc = {
  handleOpenModal: (e: SyntheticEvent): void => {String(e);},
  addFavoriteHook: (hookName: string, userId: string): void => {String({ hookName, userId });},
  addSessionHooks: (sessionHooks: string[]): void => {String(sessionHooks);},
  getFavoriteHooks: (): void => {String();},
};
