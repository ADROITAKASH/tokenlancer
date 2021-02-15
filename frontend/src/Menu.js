import React from 'react';
import './Menus.css';
import { Link, useHistory } from 'react-router-dom';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import { Avatar } from '@material-ui/core';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

function Menus() {
    // eslint-disable-next-line
    const [{ user }, dispatch] = useStateValue();
    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
        history.push("/");
    }

    return (
        <div className="menus">
            <div className="menus__top">
                <div className="menus__top--left">
                    <Link to="/">
                        <img
                            className="logo"
                            src="https://i.ibb.co/SyXXSDG/logo.png"
                            alt="logo"
                        />
                    </Link>
                    <span className="menu">
                        <h4><Link to="/my-Projects">Inbox</Link> </h4>
                        <h4 className="pad"><Link to="/my-Projects">Notification</Link> </h4>
                    </span>

                </div>

                <div className="menus__top--right">
                    {/* <Avatar src={user.photoURL ? user.photoURL : "http://dipendrachand.com.np/images/profilepic.jpg"} /> */}
                    <span>
                        {/* <h4>{user?.email}</h4> */}
                        <h4>{user?.email ? user?.email : 'chand.dipendra19@gmail.com'}</h4>
                        <h5>Rs. 95825.00</h5>
                    </span>
                    <ExpandMoreIcon
                        aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}
                    />
                    <Menu
                        id="fade-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleAuthentication}>Logout</MenuItem>
                    </Menu>
                </div>
            </div>

            <div className="menus__bottom">
                <span>
                    <h4><Link to="/browse-job">Browse Jobs</Link></h4>
                    <h4><Link to="/my-job">Proposals</Link> </h4>
                    <h4><Link to="/post-Job">Contract</Link> </h4>
                    <h4><Link to="/recruitment">Recruitment</Link> </h4>
                </span>
            </div>

        </div>
    )
}

export default Menus
