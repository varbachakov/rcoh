import styles from './styles';
import ReactMarkdown from 'react-markdown';
import { renderers } from '@/src/utils/renderers';
import Copy from '@/src/components/Copy';
import ProductCard from '@/src/components/product/card';
import { PropsTypes } from './types';

function Product({ hooks }: PropsTypes):JSX.Element {
  return (
    <section className="product">
      <div className="container">
        <ul className="product__list">
          {hooks.map((hook, idx) => (
            <li key={`Product__${idx}__${hook}`} className="product__item">
              <ProductCard {...hook}/>
              <Copy text="test"/>
            </li>
          ))}
        </ul>
      </div>
       <ReactMarkdown renderers={renderers}>
        {hooks[0].hookCode}
       </ReactMarkdown>

      <style jsx>
        {styles}
      </style>
    </section>
  );
}

export default Product;
