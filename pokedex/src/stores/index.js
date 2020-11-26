import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  favoritePokemons: [],
  inventory: [],
  allPokemons: [],
}

export function getAllPokemons () {

  return (dispatch) => {
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=9'

    fetch(url)
      .then(res => res.json()
      )
      .then(({ results }) => {
        const allPromise = results.map(pokemon => {
          return fetch(pokemon.url)
        })
        return Promise.all(allPromise)
      })
      .then(data => {
        const allJSON = data.map(pokemon => pokemon.json())
        return Promise.all(allJSON)
      })
      .then(pokemons => {
        dispatch({ type: "ALL_POKEMONS", pokemon: pokemons })
      })
      .catch(err => {
        console.log(err);
      })
  }
}

const reducer = (state = initialState,  action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      const newPokemon = state.favoritePokemons.concat(action.pokemon)
      return { ...state, favoritePokemons: newPokemon}
    case 'ADD_POKEMON':
      const addPokemon = state.inventory.concat(action.pokemon)
      return { ...state, inventory: addPokemon}
    case 'ALL_POKEMONS':
      console.log(action, 'di action');
      const fetchPokemons = state.allPokemons.concat(action.pokemon)
      return { ...state, allPokemons: fetchPokemons}
    default: 
      return state
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk))) 

export default store