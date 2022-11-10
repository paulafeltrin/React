import React,{useState} from 'react'
// import styled from 'styled-components';
// import { AiOutlineDelete } from "react-icons/ai";
// import { FiDelete } from "react-icons/fi";

export default function Todo(){

const [input, setInput] = useState()
const [List, setList] = useState([])

const Add = () =>{
    let detalhandoInput = {
      value: input,
      id: Date.now()
    }
    if(input !== " " && input !== ""){
        setList([...List, detalhandoInput])
        setInput("")
    }
  } 

function Del(rastreador){
  let confirm = window.confirm('Tem certeza que deseja deletar a tarefa?');
  if (confirm) {
    const listaFiltrada = List.filter(item => item.id !== rastreador)
    setList(listaFiltrada)
  }
}

function Edit(rastreador){
  let confirm = window.confirm('Tem certeza que deseja editar a tarefa?');
  if (confirm) {
    const listaFiltrada = List.filter(rastreador => (
      <div>
        <h2>Editando tarefa</h2>
        <input type="text" />
      </div>
    ))
    // const listaFiltrada = List.filter(item => item.id)
    setList(listaFiltrada)
  }
}

function ClearAll(id){
  let confirm = window.confirm('Tem certeza que deseja deletar todas as tarefas?');
  if (confirm) {
    const listaFiltrada = List.filter(item => item.id === id)
    setList(listaFiltrada)
  }
}
  return(
    <div>
      <h1>LISTA TO-DO</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <button title='Adicionar item' onClick={() =>{Add()}}>ADD</button>
        <input value={input} onChange={e=>setInput(e.target.value)} />
        {List.map((item) => (
            <li>
                {item.value}
                <button title='Apagar item' onClick={() =>{Del(item.id)}}>Delete</button>
                <button title='Editar item' onClick={() =>{Edit(item.id)}}>Editar</button>
            </li>
        ))}
        <button title='Apagar todos os itens' onClick={() =>{ClearAll()}}>Delete TODOS</button>
      </form>
    </div>
    
  )
}