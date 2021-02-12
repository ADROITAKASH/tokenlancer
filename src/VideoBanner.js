import React from 'react';
import './VideoBanner.css';
import { Link } from 'react-router-dom';

function VideoBanner() {
    return (
        <div className="videoBanner">
            <div className="videoBanner__info">
                <h1>Hire the perfect freelancer hourly based</h1>
                <h4>
                    Time is the wisest counselor of all
                </h4>
                    <button className="videoBanner__info--first">
                        Hire TokenLancer
                </button>
                    <button className="videoBanner__info--second">
                    <Link to="/signup">Become TokenLancer</Link>
                </button>
            </div>

        </div>
    )
}

export default VideoBanner
