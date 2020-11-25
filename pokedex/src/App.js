import React from 'react'
import { Switch, Route, Link } from "react-router-dom";
import { DetailPage, Home} from './pages';

const App = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      
      <Route path='/pokemon/:id'>
        <DetailPage/>
      </Route>
    </Switch>
  )
}

export default App