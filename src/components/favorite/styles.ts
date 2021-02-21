import css from 'styled-jsx/css';
import { colors, transitions } from '@/src/assets/styles';

const styles = css`
  .favorite {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .favorite:focus {
    outline: none;
  }
  
  .favorite :global(svg) {
    width: 22px;
    height: 22px;
    transition: color ${transitions.duration['200']} ${transitions.easing.easeInOut};
  }

  .favorite:hover :global(svg) {
    color: ${colors.dark.two};
  }
`;

export default styles;
