import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";

import { Loading } from './components' 
import { Home, DetailPage, FavoritePokemon, Inventory } from './pages';

const App = () => {
    const [isLoading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 3000)

    if(isLoading) {
        return <Loading/>
    }

    return (
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route path='/favorite'>
                <FavoritePokemon/>
            </Route>
            <Route path='/inventory'>
                <Inventory/>
            </Route>
            <Route path='/pokemon/:id'>
                <DetailPage/>
            </Route>
        </Switch>   
    )
}

export default App