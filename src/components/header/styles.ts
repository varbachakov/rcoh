import css from 'styled-jsx/css';
import { theme, colors, typography } from '@/src/assets/styles';

const styles = css`
  .header {
    padding: 10px 0;
    box-shadow: inset 0 -1px 0 ${colors.gray.one};
    background-color: ${theme.primary.colors.backgroundColorHeader};
  }
  
  .header__mode {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 40px;
  }
  
  .header__logo {
    font-family: ${theme.secondary.family};
    font-size: ${typography.fontSize.six};
    font-weight: ${typography.fontWeight.two};
  }
  
  .header__git {
    width: 30px;
    height: 30px;
    color: ${colors.dark.one};
    cursor: pointer;
  }

  .header__git:hover {
    color: ${colors.gray.two};
  }
`;

export default styles;
