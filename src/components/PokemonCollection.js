import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemons}) {
  return (
    <Card.Group itemsPerRow={6}>
      {pokemons.map((pokemon, id) =>{
        return <PokemonCard 
                  pokemon={pokemon} 
                  key={id}
                  />
      })}
    </Card.Group>
  );
}

export default PokemonCollection;
