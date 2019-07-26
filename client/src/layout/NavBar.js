import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

const NavBar = ({icon, title}) => {
    return (
        <nav className="navigation">
            <h1>
                {title} <i className={icon} />
            </h1>
            <ul className="nav-ul">
                <li className="nav-li">
                    <Link to='/'>Home</Link>
                </li>
                <li className="nav-li">
                    <Link to='/cats'>Available Cats</Link>
                </li>
                <li className="nav-li">
                    <Link to='/contact'>Contact Us</Link>
                </li>
            </ul>
        </nav>
    );
};

NavBar.defaultProps = {
    title: 'Find Your Perfect Cat Match',
    icon: 'fas fa-cat'
};

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};


export default NavBar;