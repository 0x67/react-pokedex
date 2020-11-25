import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
// import { useHistory } from "react-router-dom";

import { Loading, PokemonDetails} from './'

const PokemonCard = () => {
  const [pokemonDetails, setPokemonDetails] = useState([])
  const [isLoading, setLoading] = useState(true)
  const dispatch = useDispatch()
  // const history = useHistory()

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
  
  const addFavorite = (pokemon) => {
    dispatch({
      type: "ADD_FAVORITE",
      pokemon
    })
  }

  const pokemonData = pokemonDetails.map((pokemon) => {
    return (
      <div className="card text-center mx-auto" key={pokemon.id}>
        <div className="card-header">
          <b>{pokemon.name}</b>
          <a href="#" onClick={() => addFavorite(pokemon)}>
            {/* <img src='../assets/img/pokeball.svg'></img> */}
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-star" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
            </svg>
          </a>
        </div>
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