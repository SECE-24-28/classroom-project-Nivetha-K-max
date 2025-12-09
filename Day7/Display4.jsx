import { useEffect } from "react";
import { useState } from "react";
const Display4=()=>{
    const [data, setData]=useState(100);
    useEffect(() => {
        console.log("Display4 data",{data});
    },[]
    )
    return(
        <>
        <h1>Display4 Component</h1>
        <h1>The Data:{data}</h1>
        <button onClick={() => {setData((t)=>t=t+1)}}>Increment1</button>
        <button onClick={() => {setData(data + 1)}}>Increment</button>
        <button onClick={() => {setData(data - 1)}}>Decrement</button>
        </>
    )
}

export default Display4;