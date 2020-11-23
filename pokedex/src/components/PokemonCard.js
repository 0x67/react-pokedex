import React from 'react';
import {PlusIcon} from '@primer/octicons-react'

class PokemonCard extends React.Component {
  constructor() {
    super()
    this.state = {
      pokemons: [],
      pokemonDetails: [],
    }
  }

  componentDidMount() {
    let url ='https://pokeapi.co/api/v2/pokemon?limit=9'

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if(data) {
          this.setState({pokemons: data.results}, () => {
            this.state.pokemons.map(pokemon => {
              fetch(pokemon.url)
              .then(res => res.json())
              .then(data => {
                if(data) {
                  let temp = this.state.pokemonDetails
                  temp.push(data)
                  this.setState({pokemonDetails: temp})
                }
              })
            })
          })
        }
      })
    
    console.log(this.state.pokemonDetails);
  }

  render() {
    const {pokemonDetails} = this.state;
    const pokemons = pokemonDetails.map((pokemon) => {
      return (
        <div className="card text-center mx-auto" key={pokemon.id}>
        <div className="card-header"><b>{pokemon.name}</b></div>
        <div className="card-body">          
          <h6 className="card-subtitle mb-2 text-muted">Height: {pokemon.height}</h6>  
          <h6 className="card-subtitle mb-2 text-muted">Weight: {pokemon.weight}</h6>  
          <img src={pokemon.sprites.front_default} alt="Pokemon" />
        </div>
      </div>
      );
    });
    
    return (
      <div className="container">
        <div className="card-header">
          <button className="btn">
            <span><PlusIcon verticalAlign='middle' /></span>
          </button>
        </div>
        <div className="card-columns">
          {pokemons}
        </div>
      </div>
    );
  }
}

export default PokemonCard