import css from 'styled-jsx/css';
import { colors, typography } from '@/src/assets/styles';

const styles = css`
  .git {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: ${typography.fontSize.three};
    line-height: ${typography.lineHeight.three};
    width: 90px;
    color: ${colors.dark.one};
    cursor: pointer;
    flex-shrink: 0;
    align-self: center;
  }

  .git:hover {
    color: ${colors.gray.two};
  }
  
  .git :global(svg) {
    width: 30px;
    height: 30px;
  }
`;

export default styles;
