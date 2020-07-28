import React from 'react';
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
// import ButtonLink from './components/ButtonLink';
import Button from '../Button'

function Menu() {
  return (
    <nav className="menu">
      <a herf="/">
        <img className="logo" src={Logo} alt="titoFlix" />
      </a>

      <Button as="a" href="/" className="ButtonLink">
        Novo vídeo
      </Button>

    </nav>
  )
}

export default Menu;