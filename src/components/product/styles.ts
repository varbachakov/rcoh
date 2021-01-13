import css from 'styled-jsx/css';
import { theme, colors } from '@/src/assets/styles';

const styles = css`
  .product {
    padding-bottom: 100px;
    background-color: ${theme.primary.colors.backgroundColorMain};
  }
  
  .product__item {
    display: grid;
    grid-template-columns: 1fr 60px;
    background-color: ${colors.white.one};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04),0 4px 24px rgba(0, 0, 0, 0.04);
    border-radius: 12px;
    transition: box-shadow .3s cubic-bezier(.22,.61,.36,1);
  }
  
  .product__item:hover {
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  }

  .product__item + .product__item {
    margin-top: 20px;
  }
`;

export default styles;
