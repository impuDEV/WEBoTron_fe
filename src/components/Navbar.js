import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper blue darken-1" style={{ padding: '0 2rem'}}>
                <a href="/" className="brand-logo">Main</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}