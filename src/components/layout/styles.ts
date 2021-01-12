import css from 'styled-jsx/css';
import { zIndex } from '@/src/assets/styles';

const styles = css`
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .layout__header {
    position: sticky;
    top: 0;
    z-index: ${zIndex.header};
  }

  .layout__body {
    display: flex;
    flex-flow: column;
    flex-grow: 1;
  }
  
  .layout__footer {
    position: relative;
    z-index: ${zIndex.footer};

    bottom: 0;
    flex: 0 0 auto;
  }
`;

export default styles;
