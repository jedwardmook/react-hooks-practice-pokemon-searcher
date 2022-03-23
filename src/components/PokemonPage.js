import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";


function PokemonPage() {
  const [pokemons, setPokemons] = useState([])
  const [currentSearch, setCurrentSearch] = useState('')
  
  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then(r => r.json())
      .then(pokemonData => {
        console.log(pokemonData)
        setPokemons(pokemonData)
      })
  }, []);

  const filteredPokemon = pokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(currentSearch.toLowerCase())
  })

  function addNewPokemon(newPokemonObj){
    setPokemons([...pokemons, newPokemonObj])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm 
        addNewPokemon={addNewPokemon}
        />
      <br />
      <Search 
        currrentSearch={currentSearch}
        setCurrentSearch={setCurrentSearch}
       />
      <br />
      <PokemonCollection 
        pokemons={filteredPokemon} />
    </Container>
  );
}

export default PokemonPage;
