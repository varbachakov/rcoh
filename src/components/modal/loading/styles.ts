import css from 'styled-jsx/css';
import { zIndex, colors } from '@/src/assets/styles';

const styles = css`
  .modal-loading {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: ${zIndex.modal};
    background: ${colors.white.one};
    opacity: 0.9;
  }
  
  .modal-loading :global(svg) {
    width: 150px;
  }
  
  .modal-loading__content {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: ${colors.dark.one};
  }
`;

export default styles;
