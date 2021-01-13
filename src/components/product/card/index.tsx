import styles from './styles';
import { useMemo } from 'react';
import { PropsTypes } from './types';

function ProductCard({ hookName, handleOpenModal }: PropsTypes): JSX.Element {
  const hookText = useMemo(() => hookName.replace(/.mdx/,''), [hookName]);

  return (
    <button className="product-card" onClick={handleOpenModal} data-hookname={hookName} aria-label="open modal">
      <div className="product-card__content">
        <div className="product-card__action">
          <span className="product-card__text">{hookText}</span>
        </div>
      </div>

      <style jsx>
        {styles}
      </style>
    </button>
  );
}

export default ProductCard;
