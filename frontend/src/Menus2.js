import React from 'react';
import './Menus.css';
import { Link } from 'react-router-dom';
import Tabs from './Tabs2';

function Menus() {
  return (
    <div className="menus">
      <Link to="/">
        <img
          className="menus__logo"
          src="https://i.ibb.co/GJ7fLq4/tl-logo.png"
          alt="logo"
        />
      </Link>
      <Tabs />
    </div>

  )
}

export default Menus
