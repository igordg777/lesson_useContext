import React, { useState, useEffect, useContext } from 'react';
import MyContextForAnimalsFlowers from '../../../context';

function TypeFlowers() {

    const result = useContext(MyContextForAnimalsFlowers);
    const count = result.count
    return (
        <>
            <h1>TypeFlowers</h1>
            {count}
        </>
    )
}

export default TypeFlowers