import css from 'styled-jsx/css';
import { typography, colors, borderRadius, zIndex } from '@/src/assets/styles';

const styles = css`
  .header-search {
    position: relative;
    font-size: ${typography.fontSize.one};
    line-height: ${typography.lineHeight.one};
  }

  .header-search__normal {
    display: inline-block;
    width: 100%;
    height: 40px;
    vertical-align: top;
  }
  
  .header-search__control {
    position: relative;
    z-index: ${zIndex.search};
    width: 100%;
    height: 40px;
    padding: 0 40px;
    outline: 0;
    font-size: ${typography.fontSize.five};
    line-height: ${typography.lineHeight.five};
    background: none;
    border: none;
  }
  
  .header-search__box {
    position: absolute;
    z-index: ${zIndex.default};
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: ${borderRadius.default}px;
    background-color: ${colors.white.two};
  }

  .header-search__search {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: ${zIndex.search};
    width: 20px;
    height: 20px;
    color: ${colors.gray.four};
  }
  
  .header-search__search :global(svg) {
    width: 20px;
    height: 20px;
  }

  .header-search__clear {
    position: absolute;
    top: 0;
    right: 0;
    z-index: ${zIndex.search};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    color: ${colors.gray.four};
  }
`;

export default styles;
