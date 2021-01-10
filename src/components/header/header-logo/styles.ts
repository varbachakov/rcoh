import css from 'styled-jsx/css';
import { breakpoints } from '@/src/assets/styles';

const styles = css`
  .logo {
    width: 90px;
  }
  
  .logo--search {
    display: none;
  }
  
  @media (min-width: ${breakpoints.mobile}px) {
    .logo {
      width: 100px;
    }
    
    .logo--search {
      display: inline-block;
    }
  }
`;

export default styles;
