import { theme, colors, breakpoints } from '@/src/assets/styles';
import css from 'styled-jsx/css';

const styles = css`
  .footer {
    padding-bottom: 32px;
    border-top: 1px solid ${colors.gray.one};
    background-color: ${theme.primary.colors.backgroundColorFooter};
  }

  .footer__grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: max-content;
    grid-gap: 30px;
    padding: 24px 0 32px;
  }
  @media (min-width: ${breakpoints.mobile}px) {
    .footer__grid {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: max-content;
    }
  }
  @media (min-width: ${breakpoints.tablet}px) {
    .footer__grid {
      grid-template-columns: minmax(400px, 1fr) repeat(3, 1fr);
    }
  }
  @media (min-width: ${breakpoints.laptop}px) {
    .footer__grid {
      grid-gap: 80px;
      padding: 48px 0 64px;
    }
  }
`;

export default styles;
