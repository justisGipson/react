import React from 'react';
import './Logout.css';
import logout from '../../../assets/logout.jpg';

const Logout = (props) => {
    return(
        <nav>
            <img id='logout' src={logout} alt={'bye'} />
        </nav>
    )
}

export default Logout;