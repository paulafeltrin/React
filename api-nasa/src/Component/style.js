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
padding: 4vh 5vw 0 10vw;
font-size: 2rem;
`
export const Div = styled.div`
padding: 1vh 10vw;
display: flex;
justify-content: right;
`
export const Data = styled.p`
width: 105px;
font-size: .9rem;
text-align: center;
padding: .5vh .5vw;

:hover{
  border-radius: 5%;
  outline: 1px solid gray;
}
`
export const P = styled.p`
padding: 2vh 10vw;
font-size: 1.2rem;
`
export const Dado = styled.p`
padding-top: 3vh;
text-align: center;
`
export const Iframe = styled.iframe`
display: flex;
flex-direction: column;
width: 80vw;
height: 70vh;
margin: auto;
border: 0;
`
export const Fig = styled.figure`
display: flex;
flex-direction: column;
width: 60vw;
margin: auto;
border: 0;

:hover{
  transform: scale(1.4);
}
`
export const Copy = styled.p`
text-align: center;
font-size: .8rem;
padding: .5vh 0 10vh 0;
`