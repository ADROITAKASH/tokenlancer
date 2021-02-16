import React from 'react';
import './HiCard.css';
import HiCards from './HiCards';

export const HiCard = (props) => (
  <div className='project-list'>
    {props.jobs.map(job => (
      <HiCards job={job}></HiCards>
      // <div key={job.id}>{job.name}</div>
    ))}
  </div>
); 