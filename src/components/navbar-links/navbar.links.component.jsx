import React from 'react';
import './navbar.links.styles.scss';
// import { Link } from 'react-router-dom';

const NavbarLink = () =>{
    return(
        <div className='navbar-link'>
            <div className='home'>Home</div>
            <div className='about'>About us</div>
            <div className='service-link'>Service</div>
            <div className='blog'>Blog</div>
            <div className='contact'>Contact</div>
        </div>
    )
}
export default NavbarLink;