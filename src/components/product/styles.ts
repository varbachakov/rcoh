import css from 'styled-jsx/css';

const styles = css`
  .product {
    padding-bottom: 100px;
  }
  
  .product__item {
    position: relative;
  }
  
  .product__item + .product__item {
    margin-top: 30px;
  }
`;

export default styles;
