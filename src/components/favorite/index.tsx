import styles from './styles';
import React from 'react';
import { FavoriteSvg, FavoriteActiveSvg } from '@/src/assets/svg-inline';
import { PropsTypes } from './types';

function Favorite({ addFavoriteHook, hookName, loading, session, isFavoriteRequest, favoriteHooks }: PropsTypes): JSX.Element {
  if (loading || !session || !favoriteHooks) return <span/>;

  const handleCLick = () => {
    addFavoriteHook(hookName, session.id);
  };

  return (
    <button className="favorite" type="button" onClick={handleCLick} aria-label="favorite" disabled={isFavoriteRequest}>
      {favoriteHooks.includes(hookName) ? <FavoriteActiveSvg/> : <FavoriteSvg/>}

      <style jsx>
        {styles}
      </style>
    </button>
  );
}

export default Favorite;
