import css from 'styled-jsx/css';
import { theme } from '../theme';
import { transitions } from '../variables';

const global = css.global`
    body {
      min-width: 320px;
      color: ${theme.primary.colors.text};
      font-family: ${theme.primary.family};
      font-size: ${theme.primary.size};
      font-weight: ${theme.primary.weight};
      background-color: ${theme.primary.colors.backgroundColorBody};
      overflow-x: hidden;
    }
    
        
    svg {
      width: inherit;
      height: inherit;
      fill: currentColor;
      display: block;
    }
    
    a {
      background-color: transparent;
      text-decoration: none;
      appearance: none;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: inherit;
      cursor: pointer;
      transition: color ${transitions.delay['200']} ${transitions.easing.easeInOut}, background-color ${transitions.delay['200']} ${transitions.easing.easeInOut};
    }
    
    h1,h2,h3,h4,h5,h6 {
     margin: 0;
     font-size: inherit;
     font-weight: inherit;
    }
`;

export { global }
