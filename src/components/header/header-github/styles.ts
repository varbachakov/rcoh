import css from 'styled-jsx/css';
import { colors } from '@/src/assets/styles';

const styles = css`
  .git {
    width: 30px;
    height: 30px;
    color: ${colors.dark.one};
    cursor: pointer;
    flex-shrink: 0;
    align-self: center;
  }

  .git:hover {
    color: ${colors.gray.two};
  }
`;

export default styles;
