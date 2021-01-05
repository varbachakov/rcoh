import css from 'styled-jsx/css';
import { colors, breakpoints } from '@/src/assets/styles';

const styles = css`
  .git {
    width: 30px;
    height: 30px;
    color: ${colors.dark.one};
    cursor: pointer;
    flex-shrink: 0;
  }

  .git:hover {
    color: ${colors.gray.two};
  }
  
  .git--search {
    display: none;
  }
  @media (min-width: ${breakpoints.mobile}px) {
    .git--search {
      display: inline-block;
    }
  }
`;

export default styles;
