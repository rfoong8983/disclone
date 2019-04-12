import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, history }) => {
    const unloggedUserLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Login!</Link>
                &nbsp;or&nbsp;
            <Link to="/signup">Signup!</Link>
        </nav>
    );

    const greetingLinks = () => (
        // hgroups are used to bucket 1 or more headers
        <hgroup className="header-group">
            <h2 className="greeting">hello {currentUser.username}</h2>
            <button 
                className="signout" 
                onClick={logout}
            >sign-out
            </button>
        </hgroup>
    );

    return (currentUser ? greetingLinks() : unloggedUserLinks());
};

export default Greeting;