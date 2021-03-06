import css from 'styled-jsx/css';
import { colors, transitions } from '@/src/assets/styles';

const styles = css`
  .copy {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .copy:focus {
    outline: none;
  }
  
  .copy :global(svg) {
    width: 20px;
    height: 20px;
    transition: color ${transitions.duration['200']} ${transitions.easing.easeInOut};
  }

  .copy:hover :global(svg) {
    color: ${colors.dark.two};
  }

  .copy--active:hover :global(svg) {
    color: inherit;
  }
`;

export default styles;
