import css from 'styled-jsx/css';
import { transitions, colors, borderRadius } from '@/src/assets/styles';

const styles = css`
  .menu {
    position: absolute;
    top: 100%;
    left: -210px;
    z-index: 60;
    cursor: default;
    height: 0;
    width: 300px;
    overflow: hidden;
    transition: height ${transitions.duration['300']} ${transitions.easing.easeInOut};
    box-shadow: 0 8px 12px 0 rgb(0 0 0 / 15%);
    background-color: #fff;
    border-radius: ${borderRadius.default}px;
  }
  
  .menu__content {
    color: ${colors.gray.two};
    padding: 10px;
  }
  
  .menu__profile {
    display: grid;
    grid: min-content / 60px 1fr;
    margin-bottom: 20px;
  }
  
  .menu__avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
  }
  
  .menu__name {
    overflow: hidden;
    align-self: center;
    margin-left: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-transform: uppercase;
  }
  
  .menu__action {
    padding-top: 10px;
    border-top: 1px solid ${colors.gray.one};
    text-align: center;
  }
  
  .menu__out {
    display: inline-block;
    color: inherit;
    width: 100%;
    text-transform: uppercase;
    padding: 8px 0;
    transition: all .2s ease;
  }

  .menu__out:hover {
    color: ${colors.dark.one};
  }
`;

export default styles;
