import css from 'styled-jsx/css';
import { theme, typography, colors, breakpoints, borderRadius } from '@/src/assets/styles';

const styles = css`
  .hero-text {
    padding-bottom: 40px;
  }
  @media (min-width: ${breakpoints.mobile}px) {
    .hero-text {
      max-width: 500px;
      padding-top: 0;
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
    color: ${colors.dark.one};
  }
  @media (min-width: ${breakpoints.mobile}px) {
    .hero-text__title {
      font-size: ${typography.fontSize.title};
      line-height: ${typography.lineHeight.title};
    }
  }
  
  .hero-text__question {
    color: ${colors.dark.one};
  }
  
  .hero-text__desc {
    margin-bottom: 20px;
    font-weight: ${typography.fontWeight.three};
    color: ${colors.dark.two};
  }

  .hero-text__link {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 45px;
    background-color: ${colors.dark.one};
    color: ${colors.white.one};
    border: 1px solid ${colors.dark.one};
    border-radius: ${borderRadius.default}px;
  }
  @media (min-width: ${breakpoints.mobile}px) {
    .hero-text__link {
      max-width: 185px;
    }
  }

  .hero-text__link:hover {
    background-color: transparent;
    color: ${colors.dark.one};
  }
`;

export default styles;
