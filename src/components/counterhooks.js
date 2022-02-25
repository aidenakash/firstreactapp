import React from "react";
import { useState } from "react";

const Counter=()=>
{
    const[count,setcount]=useState(0)
const increment=()=>
{
    if(count<10)
setcount(count+1)
}

const decrement=()=>
{
    if(count>0)
setcount(count-1)
}
 

    return(
        <div>
            <center>
            <h1>Counter Card Application</h1>
            <button onClick={increment} >+</button>
            <h1>{count}</h1>
            <button onClick={decrement}>-</button>
             </center>

        </div>
    )
}
export default Counter