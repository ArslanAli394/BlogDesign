import React from 'react';
import './navbar.logo.styles.scss';
import { NavLink } from 'react-router-dom';
import Logo from "../../assests/Logo.svg";

const NavbarLogo = () =>{
    return (
        <>
            <NavLink className="link" activeClassName="active" to="/">
                <img src={Logo} alt='Logo' />
            </NavLink>
        </>
    )
}
export default NavbarLogo;