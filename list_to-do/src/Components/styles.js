import styled from "styled-components";

export const FileInput = styled.div`
display: flex;
width: 100%;
justify-content: center;
`

export const Input =styled.input`
background-color: #ffbefa;
width: 60vw;
height: 7vh;
border-radius: 10px;
caret-color: #d99bd5;
border: 2px solid #d99bd5;
color: #683266;
padding-left: 2vw;
font-size: 1.3rem;

:hover{
    background: #f0d5fd;
    border: 3px solid #d99bd5;
}
:active{
    outline: none;
}
:focus{
    border: none;
    outline: none;
}
::placeholder{
    color: #d99bd5;
}
`
export const I = styled.i`
font-size: 1.7rem;
color: white;
padding: .3vh 0;
margin-left: 1vw;
border-radius: 5px;
display: flex;
align-items: center;

:hover{
    color: #ffbefa;
    cursor: pointer;
}
`
export const P = styled.p`
font-size: 1.4rem;
width: 80%;
color: white;

@media screen and (max-width: 660px){
    font-size: 1rem;
}
`
export const Icos = styled.div`
display: flex;
flex-wrap: wrap;

@media screen and (max-width: 825px){
    flex-direction: column;
}
`
export const Ico = styled.i`
width: 4vw;
font-size: 1.2rem;
color: white;
padding: .3vh;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;

:hover{
    color: #ffbefa;
    cursor: pointer;
    outline: 1px solid;
}
@media screen and(max-width: 660px){
    width: 10vw;
}
@media screen and(max-width: 330px){
    width: 20vw;
}
`
export const List = styled.div`
padding: 7vh 0;
display: flex;
flex-wrap: wrap;
width: 90vw;
`
export const Tarefa = styled.div`
padding: 1vh 1vw;
margin: 1vh 1vw;
display: flex;
justify-content: space-around;
border: 1px solid #fff;
border-radius: 10px;
width: 90vw;

:hover{
    background: #ffffff80;
}
`