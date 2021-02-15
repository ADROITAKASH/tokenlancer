import React from 'react';
import './Card.css';
import Cards from './Cards';

export const Card = (props) => (
  <div className='project-list'>
    {props.jobs.map(job => (
      <Cards job={job}></Cards>
      // <div key={job.id}>{job.name}</div>
    ))}
  </div>
);