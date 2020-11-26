import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { CreatePokemon, About } from './'

const BodyWrapper = ({ children }) => {
  let [isActive, setActive] = useState('active')

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
                <h3>Poké Hack Database</h3>
            </div>

            <ul className="list-unstyled components">
                <p>Awesome heading</p>
                <li className="active">
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pokémons</a>
                    <ul className="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <Link to='/favorite'>Favorite</Link>
                        </li>
                        
                        <li>
                            <Link to='/inventory'>Pokéball Inventory</Link>
                        </li>

                        <li>
                            <CreatePokemon/>
                        </li>
                    </ul>
                </li>

                <li>
                    <About/>
                </li>
            </ul>

        </nav>

        <div id="content">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button onClick={handleToggle} type="button" id="sidebarCollapse" className="btn btn-info">
                    <i className="fas fa-align-left"></i>
                </button>
            </nav>

            { children }
            {/* <PokemonCard/> */}
        </div>

    </div>
  )
}

export default BodyWrapper