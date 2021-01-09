import css from 'styled-jsx/css';
import { typography, colors, theme } from '@/src/assets/styles';

const styles = css`
  .title {
    font-family: ${theme.secondary.family};
    font-size: ${typography.fontSize.title};
    line-height: ${typography.lineHeight.title};
    font-weight: ${typography.fontWeight.one};
  }
  
  .title__text {
    margin: 100px 0 30px;
    text-align: center;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='268' height='169' viewBox='0 0 268 169' fill='none'%3E%3Crect y='61' width='265' height='64' rx='30' fill='%23AEC9FF'/%3E%3Crect x='39' y='24' width='101' height='57' rx='28.5' fill='%23AEC9FF'/%3E%3Crect x='54' y='122' width='178' height='31' rx='15.5' fill='%23AEC9FF'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 220px 50px;
    color: ${colors.dark.one};
  }
`;

export default styles;
