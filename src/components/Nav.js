import React from 'react'
import {ReactComponent as Filmeicon} from '../svgs/tripod.svg'
import {ReactComponent as Serialeicon} from '../svgs/technology.svg'
import {ReactComponent as Favoriteicon} from '../svgs/signs.svg'
import { Link } from 'react-router-dom'

export const Nav = () => {

function changeColor(event) {
  document.querySelectorAll('ul li.active').forEach(function(item) {
    item.classList.remove('active');
  })
    event.target.classList.add("active")
}
    return (
      <div className="navBar">
        <div className="logo">
        </div>
        <ul>
          <Link to="/"><li className = "active" onClick={(event) => changeColor(event)}><Filmeicon/>Cele mai noi filme</li></Link>
          <Link to="/search"><li onClick={(event) => changeColor(event)}><Serialeicon/>Cele mai populare seriale</li></Link>
          <Link to="/your-library"><li onClick={(event) => changeColor(event)}><Favoriteicon/>Filme si seriale favorite</li></Link>
        </ul>
      </div>
    )
}
