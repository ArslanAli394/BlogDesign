import React from 'react';
import './navbar.styles.scss';

import NavbarLogo from '../navbar-logo/navbar.logo.component'
import NavbarLink from '../navbar-links/navbar.links.component';

const Navbar = () =>{
    return (
        <div className='navbar'>
            <div> <NavbarLogo/> </div>
            <div> <NavbarLink/> </div>
        </div>
    )
}
export default Navbar;