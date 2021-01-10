import css from 'styled-jsx/css';
import { typography, colors, borderRadius, breakpoints, transitions } from '@/src/assets/styles';

const styles = css`
  .header-search {
    font-size: ${typography.fontSize.one};
    line-height: ${typography.lineHeight.one};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 122px;
    height: 40px;
    margin-left: auto;
    margin-right: 20px;
  }

  .header-search--active {
    width: 100%;
    margin-right: 0;
    transition: width ${transitions.duration['100']} ${transitions.easing.easeInOut};
  }

  .header-search--active .header-search__normal {
    display: inline-block;
  }

  .header-search__normal {
    position: relative;
    display: none;
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    vertical-align: top;
  }
  @media (min-width: ${breakpoints.mobile}px) {
    .header-search--active {
      width: calc(100% - 170px);
      margin-right: 20px;
    }
    
    .header-search__normal {
      display: inline-block;
    }
  }
  
  .header-search__control {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 40px;
    padding: 0 25px 0 0;
    outline: 0;
    font-size: ${typography.fontSize.five};
    line-height: ${typography.lineHeight.five};
    background: none;
    border-width: 0 13px;
    border-color: transparent;
    border-style: solid;
    vertical-align: top;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  
  .header-search__box {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: ${borderRadius.default}px;
    background-color: ${colors.white.two};
  }
  
  .header-search__button {
    position: absolute;
    right: 5px;
    z-index: 2;
    width: 24px;
    height: 24px;
    color: ${colors.gray.four};
    cursor: pointer;
  }
  
  .header-search__button :global(svg) {
    width: 20px;
    height: 20px;
  }
`;

export default styles;
