import css from 'styled-jsx/css';
import { theme, colors, breakpoints } from '@/src/assets/styles';

const styles = css`
  .header {
    padding: 10px 0;
    box-shadow: inset 0 -1px 0 ${colors.gray.one};
    background-color: ${theme.primary.colors.backgroundColorHeader};
  }

  .header__mode {
    display: grid;
    grid-template-columns: 90px 1fr 90px;
    grid-template-rows: 1fr 1fr;
    gap: 10px 0;
    grid-template-areas:
    "header__logo . header__signin"
    "header__search header__search header__search";
  }
  
  .header__search {
    grid-area: header__search;
  }
  
  .header__logo {
    grid-area: header__logo;
    align-self: center;
  }
  .header__signin {
    grid-area: header__signin;
    align-self: center;
  }

  @media (min-width: ${breakpoints.mobile}px) {
    .header__mode {
      grid-template-rows: 1fr;
      gap: 30px;
      grid-template-areas: "header__logo header__search header__signin";
    }
  }
`;

export default styles;
