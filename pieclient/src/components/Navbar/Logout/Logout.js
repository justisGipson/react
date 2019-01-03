import React from 'react';
import './Logout.css';
import logout from '../../../assets/logout.jpg';

const Logout = (props) => {
    return(
            <img id='logout' src={logout} alt={'bye'} />
    )
}

export default Logout;