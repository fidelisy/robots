import React from 'react';
import './Card.css';


const Card = ({ name , email, id}) => {
    return(
        <div className='tc bg-light-green dib dr1 pa1 ma1 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}150x150`}/>
            <div>
             <h2>{ name }</h2>
             <p>{ email }</p>
            </div>
        </div>
    );
}

export default Card; 