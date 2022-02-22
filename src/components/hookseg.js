import React from "react";
import { useState } from "react";
const Hooks=()=>{
    const [msg,setMsg]=useState("initial value")
    return(
        <div>
            <h1>hookes</h1>
            <button onClick={()=>{setMsg("final value")}}>Update</button>
           <marquee><h2>{msg}</h2></marquee> 
        </div>

    )


}
export default Hooks