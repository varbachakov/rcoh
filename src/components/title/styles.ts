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
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='37' height='21' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1.024 2.353c5.67.27 11.345.252 17.025-.055A169.369 169.369 0 0035.057.512c.534-.084 1.033.295 1.114.847.005.033.008.066.01.098l.818 16.096c.027.533-.353.996-.867 1.056a281.594 281.594 0 01-17.634 1.532c-5.642.306-11.214.416-16.716.332a.994.994 0 01-.963-.958l-.818-16.1c-.028-.558.387-1.033.927-1.062a.95.95 0 01.096 0z' fill='%231c1e20'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 120px 35px;
    color: ${colors.white.one};
  }
`;

export default styles;
