import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/NavBar/index";
import PokemonCard from "../Components/PokemonCard/index";
import * as S from "./style"

export default function Home () {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var endpoints = [];
    for (var i = 1; i < 200; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
  };

  const pokemonFilter = (name) => {
    var filteredPokemons = [];
    if (name === "") {
      getPokemons();
    }
    for (var i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filteredPokemons.push(pokemons[i]);
      }
    }

    setPokemons(filteredPokemons);
  };

  return (
    <>
      <Navbar pokemonFilter={pokemonFilter} />
        <S.Ul>{pokemons.map(item=>(
          <div>
            <S.Li key={item.id}></S.Li>
            <PokemonCard name={item.data.name} image={item.data.sprites.front_default} types={item.data.types} />
          </div>
        ))}</S.Ul>
    </>
  );
};