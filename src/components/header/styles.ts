import css from 'styled-jsx/css';
import { theme, colors } from '@/src/assets/styles';

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
`;

export default styles;
