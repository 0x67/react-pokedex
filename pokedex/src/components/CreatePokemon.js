import React, {useState} from 'react'
import { useDispatch } from 'react-redux';

const CreatePokemon = () => {
  const [newPokemon, setPokemon] = useState({
      pokemonName: '',
      hp: 1,
      attack: 1,
      defense: 1,
      speed: 1
  })

  const dispatch = useDispatch()

  const addPokemon = () => {
    dispatch({
        type: "ADD_POKEMON",
        pokemon: newPokemon
    })

    clearForm()
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
        hp: 1,
        attack: 1,
        defense: 1,
        speed: 1
    })
  }
  return (
    <>
      <a href="#" data-toggle="modal" data-target="#addPokemonModal">Catch a Pokémon</a>

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
              <button type="button" className="btn btn-primary" onClick={() => addPokemon()} data-dismiss="modal">Throw Pokéball</button>
          </div>
          </div>
      </div>
      </div>
    </>
  )
}

export default CreatePokemon