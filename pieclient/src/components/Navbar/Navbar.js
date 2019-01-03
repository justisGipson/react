import React from 'react';
import './Navbar.css';
import pieslice from '../../assets/pieslice.jpeg';


const Navbar = (props) => {
    return(
        <nav>
            <img src={pieslice} alt={'pie'} />
        </nav>
    )
}

export default Navbar;