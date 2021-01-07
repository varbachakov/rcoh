import css from 'styled-jsx/css';
import { theme, typography, colors, breakpoints } from '@/src/assets/styles';

const styles = css`
  .hero-text {
    padding: 40px 0;
  }
  @media (min-width: ${breakpoints.mobile}px) {
    .hero-text {
      max-width: 500px;
      padding-bottom: 0;
      margin-right: auto;
      margin-left: auto;
    }
  }
  @media (min-width: ${breakpoints.tablet}px) {
    .hero-text {
      padding-top: 0;
      margin-top: auto;
      margin-bottom: auto;
    }
  }
  
  .hero-text__title {
    font-family: ${theme.secondary.family};
    font-size: ${typography.fontSize.four};
    line-height: ${typography.lineHeight.four};
    font-weight: ${typography.fontWeight.one};
    margin-bottom: 20px;
  }
  
  .hero-text__link {
    color: ${colors.blue.one};
  }
  
  .hero-text__desc {
    font-weight: ${typography.fontWeight.three};
  }
`;

export default styles;
