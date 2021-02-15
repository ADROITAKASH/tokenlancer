import React from 'react';
// import './Proposals.css';
import Menus from '../Menus2';
import ProposalFeed from './HiProposalFeed'

function Proposals() {
  return (
    <div className="browse-job">
      <Menus />
      <ProposalFeed />
    </div>
  )
} 

export default Proposals