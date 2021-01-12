import css from 'styled-jsx/css';
import { typography, breakpoints, colors } from '@/src/assets/styles';

const styles = css`
  .product-card {
    width: 100%;
    text-align: left;
  }

  .product-card__content {
    padding: 20px 30px;
    background-color: ${colors.white.one};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04),0 4px 24px rgba(0, 0, 0, 0.04);
    border-radius: 12px;
    transition: box-shadow .3s cubic-bezier(.22,.61,.36,1);
  }

  .product-card__content:hover {
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
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
    .product-card__text {
      font-size: ${typography.fontSize.four};
      line-height: ${typography.lineHeight.four};
      font-weight: ${typography.fontWeight.three};
    }
  }
`;

export default styles;
