import css from 'styled-jsx/css';
import { colors, transitions, breakpoints } from '@/src/assets/styles';

const styles = css`
  .copy {
    position: absolute;
    top: 0;
    right: 20px;
    height: 100%;
    width: 100%;
    max-width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: ${breakpoints.mobile}px) {
    .copy {
      right: 0;
      max-width: 100px;
    }
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
