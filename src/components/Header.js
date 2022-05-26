import React, {useContext} from 'react'
import {Link} from 'react-router-dom'

import Collapse from './navbar/Collapse'
import Search from './navbar/Search'
const Header = () => {
   
  return (
    <header className="header">
      <div className="container__fluid">
          <nav className="navbar">
             <Search></Search>
             <Collapse></Collapse>
          </nav>
      </div>
    </header>
  )
}

export default Header
