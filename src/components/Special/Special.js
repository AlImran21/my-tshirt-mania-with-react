import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Special = () => {
    const [house, setHouse] = useContext (RingContext);

    return (
        <div>
            <p className='text-xl text-green-400 font-bold'>Special</p>
            <p>Gift : {house}</p>
            <button className='bg-slate-400 py-1 px-2 rounded-sm font-semibold' onClick={() => setHouse (house + 1)}>Buy a house</button>
        </div>
    );
};

export default Special;