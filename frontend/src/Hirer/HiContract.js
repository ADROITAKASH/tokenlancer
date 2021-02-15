import React from 'react';
import './HiContract.css';
import Menus from '../Menus2';
import ContractFeed from './HiContractFeed'

function Contract() {
  return (
    <div className="contract">
      <Menus />
      <ContractFeed />
    </div>
  )
}

export default Contract