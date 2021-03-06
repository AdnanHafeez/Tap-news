// the base component of the app, contains a navbar, and content depending on user authentication.
// router decide to show login/signup page, or main App component.

import React from 'react';
import Auth from '../Auth/Auth';
import './Base.css';

import { Link } from 'react-router';

class Base extends React.Component {
    render() {
        return (
            <div>
                <nav className="nav-bar indigo lighten-1">
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo">  Tap News</a>
                        <ul id="nav-mobile" className="right">
                            { Auth.isUserAuthenticated() ?
                                (<div>
                                    <li>{ Auth.getEmail() }</li>
                                    <li><Link to="/logout">Log out</Link></li>
                                </div>)
                            :
                                (<div>
                                    <li><Link to="/login">Log in</Link></li>
                                    <li><Link to="/signup">Sign up</Link></li>
                                </div>)
                            }
                        </ul>
                    </div>
                </nav>
                <br/>
                { this.props.children }
            </div>
        );
    }
}

export default Base;