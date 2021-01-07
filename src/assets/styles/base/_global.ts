import { global } from 'styled-jsx/css';
import { theme } from '../theme';
import { transitions, breakpoints } from '../variables';

const globalStyles = global`
    body {
      min-width: 320px;
      color: ${theme.primary.colors.text};
      font-family: ${theme.primary.family};
      font-size: ${theme.primary.size};
      line-height: ${theme.primary.lineHeight};
      font-weight: ${theme.primary.weight};
      background-color: ${theme.primary.colors.backgroundColorBody};
      overflow-x: hidden;
    }
    
        
    svg {
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
      outline: none;
      transition: color ${transitions.delay['200']} ${transitions.easing.easeInOut}, background-color ${transitions.delay['200']} ${transitions.easing.easeInOut};
    }
    
    button {
      border-width: initial;
      border-style: none;
      border-color: initial;
      border-image: initial;
      background-color: transparent;
      user-select: none;
      appearance: none;
      position: relative;
      letter-spacing: 0;
      padding: 0;
      font: inherit;
      color: inherit;
      cursor: pointer;
      outline: none;
      -webkit-tap-highlight-color: transparent;
      transition: background-color ${transitions.delay['300']} ${transitions.easing.easeInOut}, color ${transitions.delay['300']} ${transitions.easing.easeInOut};
    }
    
    h1, h2, h3, h4, h5, h6 {
     margin: 0;
     font-size: inherit;
     font-weight: inherit;
    }
    
    img {
      max-width: 100%;
    }
    
    .hidden-xs {
      display: none !important;
    }
    @media (min-width: ${breakpoints.mobile}px) {
      .hidden-xs {
        display: block !important;
      }
    }
`;

export { globalStyles };
