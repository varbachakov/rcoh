import css from 'styled-jsx/css';
import { colors, borderRadius, breakpoints, typography } from '@/src/assets/styles';

const styles = css`
  .footer-contributing {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  
  .footer-contributing__title {
    max-width: fit-content;
    margin-bottom: 10px;
    font-size: ${typography.fontSize.four};
    line-height: ${typography.lineHeight.four};
  }
  
  .footer-contributing__rcoh {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 45px;
    background-color: ${colors.dark.one};
    color: ${colors.white.one};
    border: 1px solid ${colors.dark.one};
    border-radius: ${borderRadius.default}px;
  }
  @media (min-width: ${breakpoints.mobile}px) {
    .footer-contributing__rcoh {
      max-width: 185px;
    }
  }

  .footer-contributing__rcoh:hover {
    background-color: ${colors.white.one};
    color: ${colors.dark.one};
  }
  
  .footer-contributing__description {
    margin-top: 10px;
    font-size: 14px;
    line-height: 18px;
    color: ${colors.dark.two};
  }
`;

export default styles;
