import React from 'react';
import './Projects.css';
import Feed from './Feed';
// import Project from './Project';

function Projects() {
    return (
        <div className="projects">
            <div className="projects__heading">
                <h3>Crowd favorites <br />
                Here are some of our most popular projects:</h3>
            </div>
            <Feed/>
        </div>
    )
}

export default Projects