import React, { useEffect, useState } from 'react';

const Child = () => {
    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(0)

    useEffect(()=> {
        console.log(value)
        console.log(value2)
    }, [value, value2])
    return (
        <div>
            <h1>This is Child</h1>
            <h2>{value}</h2>
            <h2>{value2}</h2>
            <button onClick={() => setValue(value + 1)}>Value1</button> <br />
            <button onClick={() => setValue2(value2 + 1)}>Value 2</button>
        </div>
    );
};

export default Child;