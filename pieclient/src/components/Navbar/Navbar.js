import React from 'react';
import './Navbar.css';
import pieslice from '../../assets/pieslice.jpeg';
import Logout from './Logout/Logout'

const Navbar = (props) => {
    return(
        <nav>
            <img src={pieslice} alt={'pie'} />
            <Logout />
        </nav>
    )
}

export default Navbar;