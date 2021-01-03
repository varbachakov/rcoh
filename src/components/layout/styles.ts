import css from 'styled-jsx/css';

const styles = css`
  .layout {
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: 'layout__header' 'layout__body';
  }

  .layout__header { grid-area: layout__header; }
  .layout__body { grid-area: layout__body; }

  .layout__body {
    overflow: auto;
    display: grid;
    grid-template-rows: 1fr auto;
  }
`;

export default styles;
