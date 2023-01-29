import { useState } from "react";

export default function Counter(){
    const [count,setCount] = useState<number>(0);
    return(<div>
        <h3>Count : {count}</h3>
        <button onClick={()=>setCount(prev=>prev+1)}>Add</button>
        <button onClick={()=>setCount(prev=>prev-1)}>Reduce</button>
    </div>)
}