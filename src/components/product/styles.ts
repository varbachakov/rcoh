import css from 'styled-jsx/css';
import { theme } from '@/src/assets/styles';

const styles = css`
  .product {
    padding-bottom: 100px;
    background-color: ${theme.primary.colors.backgroundColorMain};
  }
  
  .product__item {
    position: relative;
  }
  
  .product__item + .product__item {
    margin-top: 20px;
  }
`;

export default styles;
