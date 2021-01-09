import css from 'styled-jsx/css';
import { zIndex, colors, transitions, borderRadius } from '@/src/assets/styles';

const styles = css`
  .header-list {
    position: absolute;
    top: 100%;
    z-index: ${zIndex.default};
    width: 100%;
    max-height: 250px;
    margin: 6px 0 0;
    padding: 9px 0;
    background-color: ${colors.white.one};
    border-radius: ${borderRadius.default}px;
    border: 1px solid ${colors.white.two};
    overflow: auto;
  }
  
  .header-list__item {
    color: ${colors.dark.one};
    padding: 8px 16px;
    cursor: pointer;
    transition: background-color ${transitions.duration['100']} ${transitions.easing.easeInOut};
  }

  .header-list__item:hover {
    background-color: ${colors.white.two};
  }
  
  .header-list__text {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export default styles;
