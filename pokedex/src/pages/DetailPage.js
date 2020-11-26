import React, { useEffect, useState } from 'react'
import { Loading } from '../components/'
import { useParams } from "react-router-dom";
import { BodyWrapper } from '../components'

const DetailPage = (props) => {
  const [pokemonDetails, setPokemonDetails] = useState({})
  const [isLoading, setLoading] = useState(true)
  const {id} = useParams()

  useEffect(() => {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}/`

    fetch(url)
      .then(res => res.json()
      )
      .then(results => {
        setTimeout(() => {
          setPokemonDetails(results)
          setLoading(false)
        }, 2500)
      })
      .catch(err => {
        console.log(err);
      })
    
  }, [id])

  if(isLoading) {
    return (
      <Loading/>
    )
  }
  return (
    // <h1>TEST</h1>
    <BodyWrapper>
      <div>
        <h1>ID: {pokemonDetails.id}</h1>
        <h1>Name: {pokemonDetails.name}</h1>
        <h1>HP: {pokemonDetails.stats[0].base_stat}</h1>
        <h1>Attack: {pokemonDetails.stats[1].base_stat}</h1>
        <h1>Defense: {pokemonDetails.stats[2].base_stat}</h1>
      </div>
    </BodyWrapper>
  )
  
}

export default DetailPage