import css from 'styled-jsx/css';
import { colors, typography } from '@/src/assets/styles';

const styles = css`
  .list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  .list__item {
    margin-top: 10px;
    font-size: ${typography.fontSize.one};
    line-height: ${typography.lineHeight.one};
  }
  
  .list__link {
    font-size: inherit;
    line-height: inherit;
    color: ${colors.gray.four};
  }

  .list__link:hover {
    color: ${colors.dark.one};
  }
`;

export default styles;
