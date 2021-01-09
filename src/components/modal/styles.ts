import css from 'styled-jsx/css';
import { breakpoints, zIndex, colors } from '@/src/assets/styles';

const styles = css`
  .modal {
    width: 100%;
  }
  @media (min-width: ${breakpoints.mobile}px) {
    .modal {
      position: relative;
    }
  }
  
  .modal__background {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: ${zIndex.modal};
    background: ${colors.white.one};
    opacity: 0.9;
  }
  
  .modal__content {
    position: fixed;
    top: 50%;
    right: 0;
    left: 0;
    z-index: 9010;
    display: flex;
    max-height: 100%;
    padding: 24px;
    transform: translateY(-50%);
    overflow: auto;
  }
  
  .modal__container {
    margin: 0 auto;
  }
`;

export default styles;
