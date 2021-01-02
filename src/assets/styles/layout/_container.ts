import css from 'styled-jsx/css';
import { breakpoints } from '../variables'

const container = css.global`
  .container {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
  }
  
  @media (min-width: ${breakpoints.mobile}px){
    .container {
      padding-right: 20px;
      padding-left: 20px;
    }
  }
`;

export { container }
