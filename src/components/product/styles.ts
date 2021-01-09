import css from 'styled-jsx/css';
import { colors } from '@/src/assets/styles';

const styles = css`
  .product {
    padding-bottom: 100px;
  }
  
  .product :global(.copy) {
    color: ${colors.blue.one};
  }
  
  .product__item {
    position: relative;
  }
  
  .product__item + .product__item {
    margin-top: 20px;
  }
`;

export default styles;
