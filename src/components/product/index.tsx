import styles from './styles';
import { useEffect } from 'react';
import { useSession } from 'next-auth/client';
import Copy from '@/src/components/copy';
import Favorite from '@/src/components/favorite';
import ProductCard from '@/src/components/product/card';
import { useHomeState } from '@/src/state/home-wrapper';
import { replaceHookCode } from '@/src/utils/replaceHookCode';
import { PropsTypes } from './types';

function Product({ hooks }: PropsTypes):JSX.Element {
  const { handleOpenModal, addFavoriteHook, favoriteHooks, isFavoriteRequest, getFavoriteHooks } = useHomeState();
  const [session, loading] = useSession();

  useEffect(() => {
    if (loading || !session) return;

    getFavoriteHooks();
  }, [getFavoriteHooks, loading, session]);

  return (
    <section className="product">
      <div className="container">
        <ul className="product__list">
          {hooks.map((hook, idx) => (
            <li key={`Product__${idx}__${hook.hookName}`} className="product__item">
              <ProductCard hookName={hook.hookName} handleOpenModal={handleOpenModal}/>
              <Favorite
                addFavoriteHook={addFavoriteHook}
                hookName={hook.hookName}
                loading={loading}
                session={session}
                isFavoriteRequest={isFavoriteRequest}
                favoriteHooks={favoriteHooks}
              />
              <Copy text={replaceHookCode(hook.hookCode)} theme="dark"/>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>
        {styles}
      </style>
    </section>
  );
}

export default Product;
