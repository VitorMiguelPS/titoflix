import React from 'react';
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import Button from '../Button'
import { Link } from 'react-router-dom'
// import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <nav className="menu">
      <Link to="/">
        <img className="logo" src={Logo} alt="titoFlix" />
      </Link>

      <Button as={Link} to="/cadastro/video" className="ButtonLink">
        Novo vídeo
      </Button>

    </nav>
  )
}

export default Menu;