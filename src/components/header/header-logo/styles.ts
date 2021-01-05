import css from 'styled-jsx/css';
import { theme, typography, breakpoints } from '@/src/assets/styles';

const styles = css`
  .logo {
    font-family: ${theme.secondary.family};
    font-size: ${typography.fontSize.logo};
    line-height: ${typography.lineHeight.logo};
    font-weight: ${typography.fontWeight.two};
  }
  
  .logo--search {
    display: none;
  }
  @media (min-width: ${breakpoints.mobile}px) {
    .logo--search {
      display: inline-block;
    }
  }
`;

export default styles;
