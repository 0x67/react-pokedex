import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { PokemonCard } from './'

const BodyWrapper = () => {
  let [isActive, setActive] = useState('active')

  const [newPokemon, setPokemon] = useState({
      pokemonName: '',
      hp: '',
      attack: '',
      defense: '',
      speed: ''
  })

  const dispatch = useDispatch()
  
  const addPokemon = () => {
    dispatch({
        type: "ADD_POKEMON",
        pokemon: newPokemon
    })
  }

  
  const handleChange = (e) => {
      const value = e.target.value
      setPokemon({
          ...newPokemon,
          [e.target.name]: value
      })
  }
  
  const clearForm = () => {
    setPokemon({
        pokemonName: '',
        hp: 0,
        attack: 0,
        defense: 0,
        speed: 0
    })
}
  const handleToggle = () => {
    if (isActive === '') {
        setActive('active')
    } else if (isActive === 'active') {
        setActive('')
    }
}

  return (
    <div className="wrapper">
        <nav id="sidebar" className={isActive}>
            <div className="sidebar-header">
                <h3>Poke Hack Database</h3>
            </div>

            <ul className="list-unstyled components">
                <p>Awesome heading</p>
                <li className="active">
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pokemon</a>
                    <ul className="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <Link to='/favorite'>Favorite</Link>
                        </li>
                        
                        <li>
                            <Link to='/inventory'>Pokéball Inventory</Link>
                        </li>

                        <li>
                            <a href="#" data-toggle="modal" data-target="#addPokemonModal">Catch a Pokémon</a>
                        </li>

                        <div className="modal fade" id="addPokemonModal" tabIndex="-1" role="dialog" aria-labelledby="addPokemonModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="addPokemonModalLabel" style={{color: "black"}}>Catch a Pokémon</h5>
                                <button onClick={() => clearForm()} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1" style={{color: "black"}}>Pokémon Name</label>
                                        <input value={newPokemon.pokemonName} onChange={handleChange} type="text" className="form-control" name="pokemonName" aria-describedby="emailHelp" placeholder="Enter Pokémon Name" required/>
                                        <small id="emailHelp" className="form-text text-muted">Make it awesome!</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1" style={{color: "black"}}>Pokémon HP</label>
                                        <input value={newPokemon.hp} onChange={handleChange} type="number" className="form-control" name="hp" placeholder="Enter HP Stats" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1" style={{color: "black"}}>Pokémon Attack</label>
                                        <input value={newPokemon.attack} onChange={handleChange} type="number" className="form-control" name="attack" placeholder="Enter Attack Stats" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1" style={{color: "black"}}>Pokémon Defense</label>
                                        <input value={newPokemon.defense} onChange={handleChange} type="number" className="form-control" name="defense" placeholder="Enter Defense Stats" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1" style={{color: "black"}}>Pokémon Speed</label>
                                        <input value={newPokemon.speed} onChange={handleChange} type="number" className="form-control" name="speed" placeholder="Enter Speed Stats" required/>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary"  onClick={() => clearForm()} data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={() => addPokemon()}>Throw Pokéball</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </ul>
                </li>

                <li>
                    <a href="#" data-toggle="modal" data-target="#exampleModalCenter">About</a>
                </li>

                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        
                        </div>
                    </div>
                    </div>
                </div>
            </ul>

        </nav>

        <div id="content">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button onClick={handleToggle} type="button" id="sidebarCollapse" className="btn btn-info">
                    <i className="fas fa-align-left"></i>
                </button>
            </nav>
            <PokemonCard/>
        </div>

    </div>
  )
}

export default BodyWrapper