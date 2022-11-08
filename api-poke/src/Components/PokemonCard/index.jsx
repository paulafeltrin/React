import React from "react";
import * as S from "./style"

export default function PokemonCard({ name, image, types }) {
  const typeHandler = () => {
    if (types[1]) {
      return types[0].type.name + " | " + types[1].type.name;
    }
    return types[0].type.name;
  };

  return (
    <S.Card>
        <S.H2>{name}</S.H2>
        <S.Img src={image} alt={name} />
        <S.P>{typeHandler()}</S.P>
    </S.Card>
  );
}