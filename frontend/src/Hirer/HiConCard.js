import React from 'react';
// import './ConCard.css';
import ConCards from './HiConCards';

export const ConCard = (props) => (
  <div className='project-list'>
    {props.jobs.map(job => (
      <ConCards job={job}></ConCards>
    ))}
  </div>
); 