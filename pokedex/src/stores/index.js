import { createStore } from 'redux'

const initialState = {
  favoritePokemons: [],
  inventory: []
}

const reducer = (state = initialState,  action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      const newPokemon = state.favoritePokemons.concat(action.pokemon)
      return { ...state, favoritePokemons: newPokemon}
    case 'ADD_POKEMON':
      const addPokemon = state.inventory.concat(action.pokemon)
      return { ...state, inventory: addPokemon}
    default: 
      return state
  }

}

const store = createStore(reducer) 

export default store