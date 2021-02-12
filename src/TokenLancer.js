import React from 'react';
import './TokenLancer.css';
import Menus from './admin/Menus';
import Feed from './Feed'
// import Sidebar from './Sidebar';


function TokenLancer() {
  return (
    <div className="tokenLancer">
      <Menus />
      <Feed />
    </div>
  )
}

export default TokenLancer;
