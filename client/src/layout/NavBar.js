import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Profile from '../profiles/Profile';
import Search from "./Search";

const NavBar = () => {

    return (
        <Router>
                <nav className="navigation">
                    <ul className="nav-ul">
                        <li className="nav-li">
                            <Link to='/'>Home</Link>
                        </li>
                        <li className="nav-li">
                            <Link to='/profiles'>Profiles</Link>
                        </li>
                        <li className="nav-li">
                            <Link to='/search'>Search</Link>
                        </li>
                    </ul>
                </nav>

            <Route exact path="/profiles" component={Profile}/>
            <Route exact path="/search" component={Search}/>
        </Router>
    );
};

export default NavBar;