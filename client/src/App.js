import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from './layout/NavBar';
import Home from "./layout/Home";
import Profile from './profiles/Profile';
import ProfilesPage from './profiles/ProfilesPage';
import './App.css';
import ContactPage from "./layout/ContactPage";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Router>
            <NavBar/>
            <div className="App">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/cats' component={ProfilesPage}/>
                    <Route exact path='/cats/:id' component={Profile}/>
                    <Route exact path={'/contact'} component={ContactPage}/>
                </Switch>

            </div>
        </Router>
    );
};


export default App;
