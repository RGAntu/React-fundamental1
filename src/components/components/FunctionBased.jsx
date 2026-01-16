import { useState } from "react";

function FunctionBased (){
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    };

    return(
        <div>
            <h1>Count:{count}</h1>
            <button className="border rounded-xl bg-amber-400 p-2" onClick={increment}>Increment</button>
        </div>
    )
}

export default FunctionBased;
