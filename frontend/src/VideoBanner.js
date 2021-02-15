import React from 'react';
import './VideoBanner.css';
import { Link } from 'react-router-dom';

function VideoBanner() {
    return (
        <div className="videoBanner">
            <div className="videoBanner__info">
                <h1>Hire the perfect freelancer hourly based</h1>
                <h4>
                    <strong className='strong'>Join</strong> TokenLancer
                </h4>
                <button className="videoBanner__info--first a">
                    <Link to="/login">Credential Login </Link>
                </button>
                <button className="videoBanner__info--second b">
                    <Link to="/browse-job">Non Credential Login</Link>
                </button>
            </div>

        </div>
    )
}

export default VideoBanner
