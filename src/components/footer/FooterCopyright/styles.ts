import { colors, typography, breakpoints } from '@/src/assets/styles';
import css from 'styled-jsx/css';

export default css`
  .footer-copyright {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  @media (min-width: ${breakpoints.mobile}px) {
    .footer-copyright {
      justify-content: flex-end;
    }
  }

  .footer-copyright__git {
    width: 35px;
    height: 35px;
    color: ${colors.dark.one};
  }

  .footer-copyright__git:hover {
    color: ${colors.gray.two};
  }
  
  .footer-copyright__text {
    width: 100%;
    margin-top: 8px;
    font-size: ${typography.textSm};
    color: ${colors.gray.four};
    text-align: center;
  }
  @media (min-width: ${breakpoints.mobile}px) {
    .footer-copyright__text {
      text-align: right;
    }
  }
`;
