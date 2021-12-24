import React from 'react'
import './footer.style.scss';
import Logo from '../../assests/Logo.png';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer'>
            <NavLink className="link" activeClassName="active" to="/">
                <div><img src={Logo} alt='Logo' /></div>
            </NavLink>
            <div className='footer-links'>
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
            <div className='copy-right'>
                @ Copyright Finsweet 2021
            </div>
        </div>
    )
}

export default Footer
