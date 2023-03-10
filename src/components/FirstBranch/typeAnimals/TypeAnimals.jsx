import React, { useState, useEffect, useContext } from 'react';
import MyContextForAnimalsFlowers from '../../../context';

function TypeAnimals() {


    const result = useContext(MyContextForAnimalsFlowers)
    const count = result.count;
    const setCount = result.setCount;
    return (
        <>
            TypeAnimals

            <button onClick={() => setCount(count - 1)}>Минус</button>
            {count}
            <button onClick={() => setCount(count + 1)}>Плюс</button>
        </>
    )
}

export default TypeAnimals