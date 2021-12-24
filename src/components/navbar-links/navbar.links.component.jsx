import React from 'react';
import './navbar.links.styles.scss';
import { NavLink } from 'react-router-dom';

const NavbarLink = () =>{
    return(
        <div className='navbar-link'>
            <NavLink className="link" activeClassName="active" to="/">
                    <div className='home'>Home</div>
            </NavLink>
            <NavLink className="link" activeClassName="active" to="/about">
                <div className='about'>About us</div>
            </NavLink>
            <NavLink className="link" activeClassName="active" to="/service">
                <div className='service-link'>Service</div>
            </NavLink>
            <NavLink className="link" activeClassName="active" to="/blogs">
                <div className='blog'>Blog</div>
            </NavLink>
            <NavLink className="link" activeClassName="active" to="/contact">
                <div className='contact'>Contact</div>
            </NavLink>
        </div>
    )
}
export default NavbarLink;