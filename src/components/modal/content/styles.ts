import css from 'styled-jsx/css';
import { colors } from '@/src/assets/styles';

const styles = css`
  .modal-content {
    position: relative;
    min-width: 200px;
    min-height: 180px;
    background-color: ${colors.dark.one};
    box-shadow: 0 5px 15px 0 rgba(0,0,0,.12), 0 9px 46px 0 rgba(0,0,0,.06);
    border-radius: 5px;
  }
  
  .modal-content :global(.copy) {
    right: inherit;
    color: ${colors.white.one};
  }
  
  .modal-content__grid {
    display: grid;
    grid-template-columns: 1fr max-content;
  }
  
  .modal-content__copy {
    position: relative;
    width: 60px;
    height: 60px;
  }
`;

export default styles;
