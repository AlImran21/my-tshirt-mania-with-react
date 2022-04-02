import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Aunty = () => {
    const [house, setHouse] = useContext (RingContext);

    const handleHouseIncrease = () => {
        const newHouseCount = house + 1;
        setHouse (newHouseCount);
    }

    return (
        <div>
            <h1>This is aunty</h1>
            <p>House : {house}</p>
            <button className='bg-yellow-900 text-white py-1 px-2 rounded-sm' onClick={handleHouseIncrease}>Aunty's magic</button>
        </div>
    );
};

export default Aunty;