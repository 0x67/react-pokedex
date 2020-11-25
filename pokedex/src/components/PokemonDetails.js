import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";

const PokemonDetails = (props) => {
  const [pokemonDetails, setPokemonDetails] = useState([])
  const history = useHistory()

  useEffect(() => {
    let url = `https://pokeapi.co/api/v2/pokemon/${props.pokemon.id}/`

    fetch(url)
      .then(res => res.json()
      )
      .then(results => {
        setTimeout(() => {
          setPokemonDetails(results)
        }, 2500)
      })
      .catch(err => {
        console.log(err);
      })
    
  }, [])
  
  const getDetail = (id) => {
    history.push(`/pokemon/${id}`)
  }
  /*
  Modal ada diluar parent

  button on click open modal bawa props id
  jadi fetch ulang
  */
 
  return (
    <div>
      <a href={props.pokemon.sprites.front_default} rel="noopener noreferrer" data-toggle="modal" data-target={`#exampleModalLong${props.pokemon.id}`}>
        <img className="img-thumbnail" src={props.pokemon.sprites.front_default} alt="Pokemon" />
      </a>
      <div className="modal fade" id={`exampleModalLong${props.pokemon.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">{props.pokemon.name}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
          </div>
          <div className="modal-footer">
            <button onClick={() => getDetail(props.pokemon.id)} type="button" className="btn btn-secondary" data-dismiss="modal">View on Poképedia</button>
            <button type="button" className="btn btn-info" data-dismiss="modal">Close</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetails