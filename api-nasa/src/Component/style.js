import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Times New Roman', Times, serif;
    box-sizing: border-box;
  }
`;

export const H1 = styled.h1`
padding-left: 5vw;
font-size: 1.7rem;
`
export const Data = styled.p`
font-size: .9rem;
text-align: end;
padding-right: 7vw;
`
export const P = styled.p`
padding: 0 5vw;
font-size: 1.2rem;
`
export const Iframe = styled.iframe`
display: flex;
flex-direction: column;
width: 50vw;
margin: auto;
border: 0;
`
export const Fig = styled.figure`
display: flex;
flex-direction: column;
width: 50vw;
margin: auto;
border: 0;
`
export const Copy = styled.p`
text-align: center;
font-size: .7rem;
padding-right: 5vw;
`