import React from 'react';
// import './ConCard.css';
import HiConCards from './HiConCards';

export const HiConCard = (props) => (
  <div className='project-list'>
    {props.jobs.map(job => (
      <HiConCards job={job}></HiConCards>
    ))}
  </div>
); 