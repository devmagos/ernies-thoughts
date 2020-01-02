import React from 'react';
import {NavLink, Link} from 'react-router-dom'

export default () => (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
        <Link className="navbar-brand" to="/">Ernie's Blog</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <NavLink className="nav-link" to="/blog">Blog</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/SignOut">Sign Out</NavLink>
            </li>
            </ul>  
        </div>
    </nav>
)
