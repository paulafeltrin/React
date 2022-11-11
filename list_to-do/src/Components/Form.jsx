import { useEffect, useState } from 'react'
import { BiAddToQueue } from "react-icons/bi";
import * as S from './styles'

export default function Form(Props){
    let [Text,setText]=useState('');
    let HandleInput=(Inp)=>{
        setText(Inp);
    }
    let HandleClick=(event)=>{
        console.log(event.key);
        if(event.key === 'Enter'){
            event.preventDefault();
            Text===''?alert("Não identificamos nenhum Item no Input"):Props.Take(Text)
            setText('');
    }
}
    useEffect(() => {
        setText(Props.String)
    }, [Props.String])
    return(
        <S.FileInput>
            <S.Input type="text" placeholder='Enter any To Do ...' value={Text} onKeyPress={(event) => HandleClick(event)} onChange={(Event)=>{HandleInput(Event.target.value)}}/>
            <S.I type="submit" title='Adicionar Item' onClick={()=>{HandleClick()}}><BiAddToQueue/></S.I>
        </S.FileInput>
    )
}
