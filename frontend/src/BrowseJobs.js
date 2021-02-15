import React from 'react';
import './BrowseJobs.css';
import Menus from './Menus';
import Feed from './Feed'

function BrowseJobs() {
  return (
    <div className="browse-job">
      <Menus />
      <Feed />
    </div>
  )
}
 
export default BrowseJobs