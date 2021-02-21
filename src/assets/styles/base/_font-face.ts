import css from 'styled-jsx/css';

const fontFace = css.global`
    @font-face {
        font-family: 'Museo-Sans-Cyrl';
        src:
            local('Museo-Sans-Cyrl 300'),
            url('/fonts/museosanscyrl/MuseoSansCyrl_300.woff2') format('woff2'),
            url('/fonts/museosanscyrl/MuseoSansCyrl_300.woff') format('woff');
        font-display: swap;
        font-weight: 300;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'Museo-Sans-Cyrl';
        src:
            local('Museo-Sans-Cyrl 500'),
            url('/fonts/museosanscyrl/MuseoSansCyrl_500.woff2') format('woff2'),
            url('/fonts/museosanscyrl/MuseoSansCyrl_500.woff') format('woff');
        font-display: swap;
        font-weight: 500;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'Museo-Sans-Cyrl';
        src:
            local('Museo-Sans-Cyrl 700'),
            url('/fonts/museosanscyrl/MuseoSansCyrl_700.woff2') format('woff2'),
            url('/fonts/museosanscyrl/MuseoSansCyrl_700.woff') format('woff');
        font-display: swap;
        font-weight: 700;
        font-style: normal;
    }
        
    @font-face {
        font-family: 'Navigo';
        font-weight: 500;
        font-style: normal;
        src:
            local('Navigo-Regular'),
            url('/fonts/navigo/Navigo.woff2') format('woff2'),
            url('/fonts/navigo/Navigo.woff') format('woff');
        font-display: swap;
    }
`;

export { fontFace };
