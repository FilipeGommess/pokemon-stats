import React, { useState } from 'react';
import Axios from 'axios';

import { ContainerHeader, Title, ContainerSearch, InputSearch, InputSubmit } from './styled';

export default function Header() {
  const [pokemonName, setPokemonName] = useState('');

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) => {
      console.log(response);
    });
  };
  return (
    <ContainerHeader>
      <Title>Pokemon Stats</Title>
      <ContainerSearch>
        <InputSearch
          type={Text}
          placeholder="Search..."
          onChange={(e) => {
            setPokemonName(e.target.value);
          }}
        />
        <InputSubmit onClick={searchPokemon}>Search Pokemon</InputSubmit>
      </ContainerSearch>
    </ContainerHeader>
  );
}
