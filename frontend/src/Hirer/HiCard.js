import React from 'react';
import './HiCard.css';
import Cards from './HiCards';

export const Card = (props) => (
  <div className='project-list'>
    {props.jobs.map(job => (
      <Cards job={job}></Cards>
      // <div key={job.id}>{job.name}</div>
    ))}
  </div>
);