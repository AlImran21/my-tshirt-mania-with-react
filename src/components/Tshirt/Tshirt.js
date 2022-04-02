import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt, handleAddToCart}) => {

    const {name, picture, price} = tshirt
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4 className='mt-3 mb-3'>Name : {name}</h4>
            <p>Price : ${price}</p>
            <button onClick={() => handleAddToCart (tshirt)} className='add-to-cart-button'>Add to cart</button>
            
        </div>
    );
};

export default Tshirt;