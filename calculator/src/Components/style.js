import styled from "styled-components";

export const Container = styled.div`
box-shadow: inset 3px -2px 17px 1px rgba(0,0,0,0.36);
padding: 1vh 1vw;
margin: 10vh auto;
text-align: center;
display: grid;
grid-template-columns: repeat(4, 1fr);
width: 25vw;
grid-gap: 2px;
`
export const Div = styled.div`
grid-column: span 4;
height: 10vh;
display: flex;
align-items: center;
justify-content: flex-end;
padding-right: 3vw;
`
export const Num = styled.div`
cursor: pointer;
padding: 2vh 2vw;
border: 1px solid lightgray;

&:hover{
    background-color: lightgray;
}
&:active{
    background-color: white;
}
`
export const Op = styled.div`
font-weight: bold;
padding: 2vh 2vw;
cursor: pointer;
background-color: lightgray;

&:hover{
    background-color: white;
    outline: 1px solid lightgray;
}
&:active{
    background-color: lightgray;
}
`
export const Calculate = styled.div`
cursor: pointer;
grid-column: span 2;
padding: 2vh 2vw;
background-color: orange;

&:hover{
    background-color: white;
    outline: 1px solid orange;
}
&:active{
    background-color: orange;
}
`