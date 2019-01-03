import React from 'react';
import './Logout.css';
import logout from '../../../assets/logout.jpg';

const Logout = (props) => {
    return(
            <img id='logout' src={logout} alt={'bye'} onClick={props.logout} />
    )
}

export default Logout;