import styled from "styled-components";
import Lupa from "../../assets/search.png"

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
margin: 0 auto;
max-width: 1000px;
width: 100%;
align-items: center;
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
top: .5vh;
right: 15vw;
border: none;
border-radius: 3%;
margin: 3vh 2vw;
padding: 0 4vw;
background-color: #D8D8D8;
background-image: url(${Lupa});
background-size: 1.5vw;
background-repeat: no-repeat;
background-position: 1vh;
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
@media screen and (max-width: 890px){
    background-size: 2vw;
}
@media screen and (max-width: 890px){
    background-size: 2.5vw;
}
@media screen and (max-width: 717px){
    width: 40vw;
}
`