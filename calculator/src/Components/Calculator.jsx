import React, { useState } from 'react'
import * as S from "./style"
import Display from './Dispay'
import Button from './Button'
import Operator from './Operator'
import Equal from './Equal'

export default function Calculadora() {
    const [valorDisplay, setValorDisplay] = useState('0')
    const [limparDisplay, setLimparDisplay] = useState(false)
    const [operacao, setOperacao] = useState(null)
    const [valores, setValores] = useState([0, 0])
    const [indice, setIndice] = useState(0)

    function _adicionar(label) {
        // validar UM ponto no displey
        if (label === '.' && valorDisplay.includes('.')) return

        //Retirar zero a esquerda e Validar: checar variavel limparDisplay
        const check_limparDisplay = valorDisplay === '0' || limparDisplay
        const valorAtual = check_limparDisplay ? '' : valorDisplay

        const novo_valorDisplay = valorAtual + label
        const novos_valores = [...valores]

        if (label !== '.') novos_valores[indice] = parseFloat(novo_valorDisplay)
        setValorDisplay(novo_valorDisplay)
        setLimparDisplay(false)
        setValores(novos_valores)
    }

    function _operacao(operacao_clicada) {
        if (valores[0] === 0) return
        if (indice === 0) {
            setIndice(1)
            setOperacao(operacao_clicada)
            setLimparDisplay(true)
        } else {
            const igual = operacao_clicada === '='
            const novos_valores = [...valores]
            try {
                novos_valores[0] = eval(`${novos_valores[0]} ${operacao} ${novos_valores[1]}`)
            } catch (error) { novos_valores[0] = valores[0] }

            novos_valores[1] = 0

            setValorDisplay(novos_valores[0])
            setLimparDisplay(!igual)
            setOperacao(igual ? null : operacao_clicada)
            setValores(novos_valores)
            setIndice(igual ? 0 : 1)

        }
    }

    function _limpar() {
        setValorDisplay('0')
        setLimparDisplay(false)
        setOperacao(null)
        setValores([0, 0])
        setIndice(0)
    }

    function _Del() {
        setValorDisplay(valorDisplay.substring(0, valorDisplay.length -1))
        setOperacao(null)
    }

    function _Porcentagem() {
        setValorDisplay(valorDisplay / 100);
        setLimparDisplay(true)
        setOperacao(null)
        setValores([0, 0])
        setIndice(0)
    }

    return (
        <S.Container>
            <Display valor={valorDisplay}></Display>
            <Operator label='AC' funcao={_limpar}></Operator>
            <Operator label='DEL' funcao={_Del}></Operator>
            <Operator label='%' funcao={_Porcentagem}></Operator>
            <Operator label='/' funcao={_operacao} ></Operator>
            <Button label='7' funcao={_adicionar} ></Button>
            <Button label='8' funcao={_adicionar} ></Button>
            <Button label='9' funcao={_adicionar} ></Button>
            <Operator label='x' funcao={_operacao} ></Operator>
            <Button label='4' funcao={_adicionar} ></Button>
            <Button label='5' funcao={_adicionar} ></Button>
            <Button label='6' funcao={_adicionar} ></Button>
            <Operator label='-' funcao={_operacao} ></Operator>
            <Button label='1' funcao={_adicionar} ></Button>
            <Button label='2' funcao={_adicionar} ></Button>
            <Button label='3' funcao={_adicionar} ></Button>
            <Operator label='+' funcao={_operacao} ></Operator>
            <Button label='0' funcao={_adicionar} ></Button>
            <Button label='.' funcao={_adicionar} ></Button>
            <Equal label='=' funcao={_operacao} ></Equal>
        </S.Container>
    )
}