import React from 'react';
import './ProjectFeed.css';
import Feed from './Feed'
import Menus from './admin/Menus';

function ProjectFeed() {
  return (
    <div className="projectfeed">
      <Menus />
      <Feed />
    </div>
  )
}

export default ProjectFeed