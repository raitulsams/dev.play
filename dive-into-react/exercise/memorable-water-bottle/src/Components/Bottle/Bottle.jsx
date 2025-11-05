import React from 'react';
import "./Bottle.css"

const Bottle = ({ bottle }) => {
    /*   console.log(bottle) */
    const { name, id, img, price } = bottle
    return (
        <div>
            <div className='bottle'>
                <p>Name: {name}</p>
                <img src={img} alt="" />
                <p>Price: {price}</p>
            </div>
        </div>
    );
};

export default Bottle;