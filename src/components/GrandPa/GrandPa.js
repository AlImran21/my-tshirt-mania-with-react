import React, { createContext, useState } from 'react';
import Uncle from '../Uncle/Uncle'
import Father from '../Father/Father'
import Aunty from '../Aunty/Aunty'
import './GrandPa.css'

export const RingContext = createContext('ring')


const GrandPa = () => {
    const [house, setHouse] = useState(1);

    const ornament = 'Ghorar Dim';

    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa'>
                <p className='text-3xl font-bold text-orange-900'>GrandPa</p>
                <button onClick={handleBuyAHouse} className='bg-purple-700 text-white px-4 py-1 my-2  rounded-sm'>Buy A House</button>
                <p className='text-xl text-sky-500'>House : {house}</p>
                <section className='flex'>
                    <Uncle house={house}></Uncle>
                    <Father house={house}></Father>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default GrandPa;