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
                        src="https://i.ibb.co/SyXXSDG/logo.png"
                        alt="logo"
                    />
                </Link>
            </div>

            <div className="header__right">
                {/* <h4><Link to="/browse-job">Fck In</Link></h4>
                <h4><Link to="/login">Log In</Link></h4>
                <h4><Link to="/signup">Sign Up </Link></h4> */}
                <button><Link to="/browse-job">Fck In</Link></button>
            </div>

        </div >
    )
}

export default Header
