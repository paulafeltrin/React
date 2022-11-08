import * as React from "react";
import Logo from "../../assets/pokemon-logo.png"
import * as S from "./style"

export default function Navbar({ pokemonFilter }) {
  return (
    <S.Header>
      <S.Div>
        <S.Img src={Logo} alt="Logo-Pokémon" />
        <S.Search onChange={(e) => pokemonFilter(e.target.value)} inputProps={{ "aria-label": "search" }} placeholder="Pesquisar" />
      </S.Div>
    </S.Header>
  );
}