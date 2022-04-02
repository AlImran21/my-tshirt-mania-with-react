import React from 'react';
import Tshirt from '../Tshirt/Tshirt';
import './Cart.css'
const Cart = ({cart, handleRemoveFromCart}) => {
    // Conditional rendering options
    // 1. Element variable
    // 2. Ternary operator (condition ? true : false)
    // 3. && operator (shorthand)
    // 4. || (or operator)

    let command;
    if (cart.length === 0) {
        command = <div>
            <h5>ohh kipta, khoroc kor</h5>
            <p>kinos na ken</p>
        </div>
    } 
    else if (cart.length === 1) {
        command = <p>Please add more...</p>
    } else {
        command = <p><small>Thanks for adding item</small></p>

    }



    return (
        <div>
            <h1>Items Selected : {cart.length}</h1>
            {
                cart.map (tshirt => <p>
                    {tshirt.name}
                    <button className='x-button' onClick={() => handleRemoveFromCart (tshirt)}>X</button>
                    </p>)
            }
            {cart.length === 0 || <p className='x-button'>YAY! You are buying</p>}
            {cart.length === 3 && <div className='x-button'>
                <h3>Trigonal</h3>
                <p>Tin jon ke ki gift diba</p>
                </div>}
            {command}
            {cart.length !==4 ? <p>Keep adding </p> : <button className='x-button'>Remove All</button>}
            {cart.length ===4 && <button className='x-button'>Review Order</button>}
        </div>
    );
};

export default Cart;