import css from 'styled-jsx/css';

const styles = css`
  .hero-view {
    position: relative;
    display: flex;
    justify-content: center;
  }

  .hero-view__canvas {
    width: auto;
    height: auto;
  }

  .hero-view__img {
    position: absolute;
    top: 0;
  }
  
  .hero-view__img--redactor {
    top: 15px;
    width: 480px;
  }
`;

export default styles;
