import { createStore } from 'redux'

const initialState = {
  favoritePokemons: []
}

const reducer = (state = initialState,  action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      const newPokemon = state.favoritePokemons.concat(action.pokemon)
      return { ...state, favoritePokemons: newPokemon}
    default: 
      return state
  }

}

const store = createStore(reducer) 


export default store