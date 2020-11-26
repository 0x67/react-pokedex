import React from 'react';
import { useSelector } from 'react-redux';
import { BodyWrapper } from '../components'

const Inventory = () => {
  const inventories = useSelector((state) => state.inventory)

  const pokemons = inventories.map((pokemon) => {
    return (
      <div className="card text-center mx-auto" key={pokemon.pokemonName}>
        <div className="card-header">
          <b>{pokemon.pokemonName}</b>
        </div>
        <div className="card-body">          
          <h6 className="card-subtitle mb-2 text-muted">HP: {pokemon.hp}</h6> 
          <h6 className="card-subtitle mb-2 text-muted">Attack: {pokemon.attack}</h6>
          <h6 className="card-subtitle mb-2 text-muted">Defense: {pokemon.defense}</h6>
          <h6 className="card-subtitle mb-2 text-muted">Speed: {pokemon.speed}</h6>  
        </div>
      </div>
    )
  })

  return (
    <BodyWrapper>
      <div className="container">
        <div className="card-columns">
          {pokemons}
        </div>
      </div>
    </BodyWrapper>
  )
}

export default Inventory