import css from 'styled-jsx/css';
import { typography, breakpoints } from '@/src/assets/styles';

const styles = css`
  .product-card {
    width: 100%;
    text-align: left;
  }

  .product-card__content {
    padding: 20px 10px;
  }

  .product-card__action {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .product-card__text {
    font-size: ${typography.fontSize.three};
    line-height: ${typography.lineHeight.three};
    font-weight: ${typography.fontWeight.three};
  }
  
  @media (min-width: ${breakpoints.mobile}px) {
    .product-card__content {
      padding: 20px 30px;
    }
    
    .product-card__text {
      font-size: ${typography.fontSize.four};
      line-height: ${typography.lineHeight.four};
      font-weight: ${typography.fontWeight.three};
    }
  }
`;

export default styles;
