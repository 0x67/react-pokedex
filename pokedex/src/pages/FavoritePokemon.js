import React from 'react'
import { useSelector } from 'react-redux';

const FavoritePokemon = () => {
  const favorites = useSelector((state) => state.favoritePokemons)

  const pokemons = favorites.map((pokemon) => {
    return (
      <div className="card text-center mx-auto" key={pokemon.id}>
        <div className="card-header">
          <b>{pokemon.name}</b>
          <a href="#">
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
          </a>
        </div>
        <div className="card-body">          
          <h6 className="card-subtitle mb-2 text-muted">HP: {pokemon.stats[0].base_stat}</h6> 
          <h6 className="card-subtitle mb-2 text-muted">Attack: {pokemon.stats[1].base_stat}</h6>
          <h6 className="card-subtitle mb-2 text-muted">Defense: {pokemon.stats[2].base_stat}</h6>
          <h6 className="card-subtitle mb-2 text-muted">Speed: {pokemon.stats[3].base_stat}</h6>  
        </div>
      </div>
    )
  })

  return (
    <div className="container">
      <div className="card-columns">
        {pokemons}
      </div>
    </div>
  )
}

export default FavoritePokemon