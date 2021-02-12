import React from 'react';
import './BrowseJobs.css';
import Feed from './Feed'
import Menus from './Menus';

function BrowseJobs() {
  return (
    <div className="browse-job">
      <Menus />
      <Feed />
    </div>
  )
}

export default BrowseJobs