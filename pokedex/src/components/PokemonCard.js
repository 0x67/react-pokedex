import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import PokemonDetails from './PokemonDetails'

const PokemonCard = () => {
  const [pokemonDetails, setPokemonDetails] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=9'

    let temp = []
    fetch(url)
      .then(res => res.json()
      )
      .then(({ results }) => {
        results.map(pokemon => {
          fetch(pokemon.url)
            .then(res => res.json())
            .then(data => {
              temp.push(data)
              setTimeout(() => {
                setPokemonDetails(temp)
                setLoading(false)
              }, 2500)
            })
            .catch(err => {
              console.log(err);
            })
          })
      })
      .catch(err => {
        console.log(err);
      })
    
  }, [])

  const pokemonData = pokemonDetails.map((pokemon) => {
    return (
      <div className="card text-center mx-auto" key={pokemon.id}>
        <div className="card-header"><b>{pokemon.name}</b></div>
        <div className="card-body">          
          <h6 className="card-subtitle mb-2 text-muted">HP: {pokemon.stats[0].base_stat}</h6> 
          <h6 className="card-subtitle mb-2 text-muted">Attack: {pokemon.stats[1].base_stat}</h6>
          <h6 className="card-subtitle mb-2 text-muted">Defense: {pokemon.stats[2].base_stat}</h6>
          <h6 className="card-subtitle mb-2 text-muted">Speed: {pokemon.stats[3].base_stat}</h6>  
          <PokemonDetails pokemon={pokemon}/>
        </div>
      </div>
    )
  })

  if(isLoading) {
    return (
      <Loading/>
    )
  }

  return (
    <div className="container">
      <div className="card-columns">
        {pokemonData}
      </div>
    </div>
  )
}

export default PokemonCard