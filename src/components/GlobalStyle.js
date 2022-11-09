import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'GoyangDeogyang';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/GoyangDeogyang.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

body {
    font-family: 'GoyangDeogyang', "Arial", sans-serif;
    padding-top: 1em;
    white-space: pre-wrap;
    background-image: url('/images/bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }

ul, ol {
    list-style: none;
    padding-left: 0px;
  }
`;
export default GlobalStyle;
