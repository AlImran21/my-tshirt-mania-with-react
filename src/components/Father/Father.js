import React from 'react';
import Myself from '../MySelf/MySelf'
import Brother from '../Brother/Brother'
import Sister from '../Sister/Sister'
const Father = ({house}) => {
    return (
        <div>
            <h1>This is father</h1>
            <p>House : {house}</p>
            <Myself house={house}></Myself>
            <Brother house={house}></Brother>
            <Sister house={house}></Sister>
        </div>
    );
};

export default Father;