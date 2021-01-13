import css from 'styled-jsx/css';
import { colors, breakpoints } from '@/src/assets/styles';

const styles = css`
  .modal-content {
    position: relative;
    min-width: 200px;
    min-height: 180px;
    background-color: ${colors.dark.one};
    box-shadow: 0 5px 15px 0 rgba(0,0,0,.12), 0 9px 46px 0 rgba(0,0,0,.06);
    border-radius: 5px;
  }
  
  .modal-content__grid {
    display: grid;
    grid-template-columns: 1fr 40px;
  }
  @media (min-width: ${breakpoints.mobile}px) {
    .modal-content__grid {
      grid-template-columns: 1fr 60px;
    }
  }
  
  .modal-content__copy {
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 60px;
  }
`;

export default styles;
