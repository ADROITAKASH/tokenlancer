import React from 'react';
import './Contract.css';
import Menus from '../Menus';
import ContractFeed from './ContractFeed'

function Contract() {
  return (
    <div className="contract">
      <Menus />
      <ContractFeed />
    </div>
  )
}

export default Contract