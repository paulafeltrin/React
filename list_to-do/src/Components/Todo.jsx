import React from 'react'
import { RiDeleteBack2Line, RiEditLine } from "react-icons/ri";
import * as S from './styles'

export default function Todo(Props){
  return (
    <S.List>
        {Props.GetTodos.map((Elem,Ind)=>
            {
                return(
                    <S.Tarefa key={Ind}>
                        <S.P>{Elem}</S.P>
                        <S.Icos>
                            <S.Ico title='Editar Item' onClick={()=>{Props.Edit(Ind,Elem)}}><RiEditLine /></S.Ico>
                            <S.Ico title='Deletar Item' onClick={()=>{Props.Del(Ind)}}><RiDeleteBack2Line /></S.Ico>
                        </S.Icos>
                    </S.Tarefa>
                )
            })
        }
    </S.List>
  )
}
