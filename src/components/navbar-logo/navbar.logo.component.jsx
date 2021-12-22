import React from 'react';
import './navbar.logo.styles.scss';

import Logo from "../../assests/Logo.svg";

const NavbarLogo = () =>{
    return (
        <>
            <img className='navbar-logo' src={Logo} alt='Logo' />
        </>
    )
}
export default NavbarLogo;