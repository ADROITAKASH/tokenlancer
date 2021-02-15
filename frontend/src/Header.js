import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <Link to="/">
                    <img
                        className="header__logo"
                        src="https://i.ibb.co/GJ7fLq4/tl-logo.png"
                        alt="logo"
                    />
                </Link>
            </div>

            <div className="header__right">
                <button><Link to="/browse-job">Fck In</Link></button>
            </div>

        </div >
    )
}

export default Header
