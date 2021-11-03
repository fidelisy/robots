import React from 'react';
import './Navigation.css';


const Navigation = () => {
    return(
        <div className="container">
            <div>
             <li className="active"> HOME </li>
            </div>
             <li> Notification </li>
             <li> Help </li>
             <li> Sign In/Sign Up</li>
        </div>
    );
}

export default Navigation; 