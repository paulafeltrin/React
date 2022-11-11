import { useEffect, useState } from 'react'
import { BiAddToQueue } from "react-icons/bi";
import * as S from './styles'

export default function Form(Props){
    let [Text,setText]=useState('');
    let HandleInput=(Inp)=>{
        setText(Inp);
    }
    let HandleClick=()=>{
        Text===''?alert("Não identificamos nenhum Item no Input"):Props.Take(Text)
        setText('');
    }
    useEffect(() => {
        setText(Props.String)
    }, [Props.String])
    return(
        <S.FileInput>
            <S.Input type="text" placeholder='Enter any To Do ...' value={Text} onChange={(Event)=>{HandleInput(Event.target.value)}}/>
            <S.I title='Adicionar Item' onClick={()=>{HandleClick()}}><BiAddToQueue/></S.I>
        </S.FileInput>
    )
}
