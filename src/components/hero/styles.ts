import css from 'styled-jsx/css';
import { theme, breakpoints, colors } from '@/src/assets/styles';

const styles = css`
  .hero {
    position: relative;
    padding: 80px 0;
    color: ${theme.dark.colors.text};
    background-color: ${colors.blue.one};
  }
  
  .hero__grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: max-content max-content;
  }
  @media (min-width: ${breakpoints.tablet}px) {
    .hero {
      padding: 80px 0;
    }
    
    .hero__grid {
      grid-template-columns: 1fr 620px;
      grid-template-rows: 1fr;
    }
  }
  
  .hero__shape {
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    line-height: 0;
    direction: ltr;
    overflow: hidden;
    transform: rotate(180deg);
  }

  .hero__shape :global(svg) {
    position: relative;
    left: 50%;
    z-index: -1;
    display: block;
    width: calc(130% + 1.3px);
    height: 48px;
    transform: translateX(-50%);
  }
`;

export default styles;
