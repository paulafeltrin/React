import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  ::-webkit-scrollbar{
    width: 9px;
    height: 8px;
  }
  ::-webkit-scrollbar-thumb{
    background: #D8D8D8;
    border-radius: 25%;
  }
  ::-webkit-scrollbar-track{
    background: white;
  }
  body{
    margin: 0 auto;
    max-width: 1000px;
    width: 100%;
    align-items: center;
  }
`