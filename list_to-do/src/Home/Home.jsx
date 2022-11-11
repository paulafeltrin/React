import { useEffect, useState} from 'react'
import * as S from './style'
import Form from '../Components/Form'
import Todo from '../Components/Todo'

export default function Home() {
    let [ToDoArray, setToDoArray] = useState([]);
    let [In,setIn]=useState(-1);
    let [Str,setStr]=useState('');

    let CollectInput = (Value) => {
        if(Str!==''){
            let Temp=[...ToDoArray];
            Temp[In]=Value;
            localStorage.setItem("Todo",JSON.stringify(Temp));
            setToDoArray(Temp);

            setStr('');
            setIn(-1);
        }
        else{
            let Temp=[Value,...ToDoArray];
            localStorage.setItem("Todo",JSON.stringify(Temp));
            setToDoArray(Temp);
        }
    }

    let Delete=(Ind)=>{
        let confirm = window.confirm('Tem certeza que deseja deletar a tarefa?');
        if (confirm) {
            let newArr=[...ToDoArray];
            newArr.splice(Ind,1);
            localStorage.setItem("Todo",JSON.stringify(newArr));
            setToDoArray(newArr);
        }
    }
    
    let EditText=(Ind,Elem)=>{
        let confirm = window.confirm('Tem certeza que deseja deletar a tarefa?');
        if (confirm) {
            setIn(Ind);
            setStr(Elem);          
        };
    }
    useEffect(()=>{
        let Ar=JSON.parse(localStorage.getItem("Todo"));
        if(Ar)
        setToDoArray(Ar);
    },[])

    return (
        <S.Body>
            <S.H1>ToDo App</S.H1>
            <div>
                <Form
                onSubmit={(e) => e.preventDefault()}
                Take={CollectInput}
                String={Str===''? '':Str}
                />
                { ToDoArray.length === 0 ?
                <S.Alert role="alert"> Nenhuma atividade prevista até o momento!
                </S.Alert> : <Todo GetTodos={ToDoArray} Del={Delete} Edit={EditText}/>
                }
            </div>
        </S.Body>
    )
}