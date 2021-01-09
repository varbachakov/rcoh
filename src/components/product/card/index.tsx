import styles from './styles';
import { PropsTypes } from './types';

function ProductCard({ hookName, handleOpenModal }: PropsTypes): JSX.Element {
  return (
    <button className="product-card" onClick={handleOpenModal} data-hookname={hookName}>
      <div className="product-card__content">
        <div className="product-card__action">
          <span className="product-card__text">{hookName.replace(/.mdx/,'')}</span>
        </div>
      </div>

      <style jsx>
        {styles}
      </style>
    </button>
  );
}

export default ProductCard;
