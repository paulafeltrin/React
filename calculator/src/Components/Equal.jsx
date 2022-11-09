import React from 'react'
import * as S from "./style"

export default ({ label, funcao, span, operacao }) => {
    let classes = 'button '
    classes += span ? span : ''
    classes += operacao ? ' op' : ''

    return (
        <>
            <S.Calculate onClick={() => funcao(label)}>
                {label}
            </S.Calculate>
        </>
    )
}
