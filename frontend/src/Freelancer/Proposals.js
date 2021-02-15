import React from 'react';
// import './Proposals.css';
import Menus from '../Menus';
import ProposalFeed from './ProposalFeed'

function Proposals() {
  return (
    <div className="browse-job">
      <Menus />
      <ProposalFeed />
    </div>
  )
}

export default Proposals