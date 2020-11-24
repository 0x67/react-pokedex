import React, { useEffect, useState } from 'react'
import Loading from './Loading'

const PokemonCard = () => {
  const [pokemonDetails, setPokemonDetails] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=9'

    let temp = []
    fetch(url)
      .then(res => res.json()
      )
      .then(({results}) => {
        results.map(pokemon => {
          fetch(pokemon.url)
            .then(res => res.json())
            .then(data => {
              temp.push(data)
              setTimeout(() => {
                setPokemonDetails(temp)
                setLoading(false)
              }, 3000)
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
          <h6 className="card-subtitle mb-2 text-muted">Height: {pokemon.height}</h6>  
          <h6 className="card-subtitle mb-2 text-muted">Weight: {pokemon.weight}</h6>  
          <a target="_blank" href={pokemon.sprites.front_default} rel="noopener noreferrer">
            <img className="img-thumbnail" src={pokemon.sprites.front_default} alt="Pokemon" />
          </a>
        </div>
      </div>
    )
  })

  if(isLoading) {
    return (
      <Loading></Loading>
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