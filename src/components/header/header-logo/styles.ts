import css from 'styled-jsx/css';
import { breakpoints } from '@/src/assets/styles';

const styles = css`
  .logo {
    width: 90px;
    align-self: center;
  }
  
  @media (min-width: ${breakpoints.mobile}px) {
    .logo {
      width: 100px;
    }
  }
`;

export default styles;
