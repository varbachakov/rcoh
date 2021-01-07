import css from 'styled-jsx/css';
import { theme, breakpoints } from '@/src/assets/styles';

const styles = css`
  .hero {
    padding: 30px 0;
    color: ${theme.dark.colors.text};
    background-color: ${theme.dark.colors.backgroundColor};
  }
  
  .hero__grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: max-content max-content;
  }
  @media (min-width: ${breakpoints.tablet}px) {
    .hero {
      padding: 50px 0;
    }
    
    .hero__grid {
      grid-template-columns: 1fr 620px;
      grid-template-rows: 1fr;
    }
  }
`;

export default styles;
