import styles from './styles';
import { PropsTypes } from './types';

function ProductCard({ hookName, hookCode }: PropsTypes): JSX.Element {
  console.info(hookName.replace(/.mdx/,''));
  console.info(hookCode);

  return (
    <button className="product-card">
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
