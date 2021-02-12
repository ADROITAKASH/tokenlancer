import React from 'react';
import './ProjectList.css';
import {ProjectContainer} from '../ProjectContainer/ProjectContainer';

export const ProjectList=(props)=>(
    <div className='project-list'>
    {props.monsters.map(monster=>(
        <ProjectContainer monster={monster}></ProjectContainer>
        // <div key={monster.id}>{monster.name}</div>
    ))}
    </div>
);