import React, { useState } from 'react';
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import GlobalStyles from './styles/GlobalStyles';

import {
  PokeStats,
  ContainerHeader,
  Title,
  ContainerSearch,
  InputSearch,
  InputSubmit,
  Aside,
  ContainerPokemon,
} from './styled';

function App() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemon, setPokemon] = useState(false);

  const searchPokemon = (e) => {
    e.preventDefault();
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        setPokemon({
          name: pokemonName,
          species: response.data.species.name,
          img: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          type: response.data.types[0].type.name,
        });
        setPokemonName('');
      })
      .catch(() => {
        toast.error('Pokemon inválido');
      });
  };
  return (
    <PokeStats>
      <ContainerHeader>
        <Title>Pokemon Stats</Title>
        <ContainerSearch onSubmit={searchPokemon}>
          <InputSearch
            type="text"
            placeholder="Search..."
            onChange={(e) => {
              setPokemonName(e.target.value);
            }}
            value={pokemonName}
          />
          <InputSubmit type="submit" />
        </ContainerSearch>
      </ContainerHeader>
      <Aside pokemon={pokemon}>
        <ContainerPokemon>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.img} alt="pokemon" />
          <h3>Species: {pokemon.species}</h3>
          <h3>Type: {pokemon.type}</h3>
          <h3>Hp: {pokemon.hp}</h3>
          <h3>Attack: {pokemon.attack}</h3>
          <h3>Defense: {pokemon.defense}</h3>
        </ContainerPokemon>
      </Aside>
      <GlobalStyles />
      <ToastContainer autoClose={2000} />
    </PokeStats>
  );
}

export default App;
