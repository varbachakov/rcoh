import css from 'styled-jsx/css';

export default css`
  .list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  .list__item {
    margin-top: 10px;
    font-size: 13px;
    line-height: 16px;
  }
  
  .list__link {
    font-size: inherit;
    line-height: inherit;
    color: #8c8c8c;
  }

  .list__link:hover {
    color: #111;
  }
`;
