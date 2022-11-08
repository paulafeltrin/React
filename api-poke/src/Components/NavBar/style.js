import styled from "styled-components";

export const Header = styled.header`
position: fixed;
width: 100%;
top: 0;
left: 0;
`
export const Div = styled.div`
display: flex;
justify-content: space-between;
padding: 1vh 6vw;
background-color: #000d80;
`

export const Img = styled.img`
height: 5em;
@media screen and (max-width: 717px){
    width: 30vw;
    object-fit: contain;
}
`
export const Search = styled.input`
position: absolute;
height: 6vh;
top: 2.5vh;
right: 3vw;
border: none;
border-radius: 3%;
margin: 3vh 0;
padding: 0 2vw;
background-color: #D8D8D8;
font-size: 1.2rem;
caret-color: #000d80;
:hover{
    background-color: #FFF;
}
:active{
    background-color: #D8D8D8;
}
:focus{
    outline: 0;
}
@media screen and (max-width: 717px){
    width: 40vw;
}
`
export const Ico = styled.figure`
position: relative;
top: 7vh;
`