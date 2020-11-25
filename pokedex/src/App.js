import React from 'react'
import { Switch, Route, Link } from "react-router-dom";
import { DetailPage, Home, FavoritePokemon} from './pages';

const App = () => {
  return (
    <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorite">Favorite</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/favorite'>
            <FavoritePokemon/>
          </Route>
          <Route path='/pokemon/:id'>
            <DetailPage/>
          </Route>
        </Switch>
      </div>

    
  )
}

export default App