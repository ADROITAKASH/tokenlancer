import React from 'react';
import './ProjectContainer.css';

export const ProjectContainer=(props)=>(
    <div className='project' key={props.monster.id}>
    <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2`}/>
                <div className="project__bottom">
                <h2>{props.monster.name}</h2>
                <h4>{props.monster.email}</h4>
            </div>
    </div>
);