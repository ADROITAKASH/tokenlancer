import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './ProjectContainer.css';

export const ProjectContainer = (props) => (
    <div className='project' key={props.job.jobId}>
        <div className="project__bottom">
            <h2 style={{ textAlign: 'center' }} >{props.job.title}</h2> {/* name for Job */}

            <h3 style={{ color: "#00000051", textAlign:'center' }}>skills</h3> {/* name for Job */}
            <h4>{props.job.skills}</h4> {/* skills required */}

            <h4><strong>Work Time:</strong> {props.job.hours} <em>Hrs</em></h4> {/* estimated time */}

            <h4><strong>Tokens:</strong> {props.job.tokensperhour} <em>/hr</em></h4> {/* tokens per hour */}

            <Popup
                trigger={<button class="bubbly-button button"> Open Modal </button>}
                modal
                nested
            >
                
                {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                            &times;
        </button>
                        <div className="header"> {props.job.title} </div>
                        <div className="content">
                            {props.job.description}
        </div>
                        <div className="actions">
                            <button
                                class="bubbly-button button"
                                onClick={() => {
                                    console.log('modal closed ');
                                    close();
                                }}
                            >
                                close modal
          </button>
                        </div>
                    </div>
                )}
            </Popup>
        </div>
    </div>
);