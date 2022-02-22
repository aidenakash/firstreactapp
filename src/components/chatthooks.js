import React from "react";
import { useState } from "react";
const Chatapp=()=>{
    const[username,setUsername]=useState("")
    const[msg,setMsg]=useState("")

const updatefields=(event,key)=>{
    if(key==="username"){
        setUsername(event.target.value)
    }
    else if(key==="msg")
    {
        setMsg(event.target.value)
    }
}
    return(
        <div>
            <h1>ChatApp</h1>
    <form>
        <h1>{username}</h1>
        <p>{msg}</p>
        <input type="text" placeholder="enter the  UserName " onChange={(event)=>{updatefields(event,"username")}}></input>
         <input type="text" placeholder="enter the message" onChange={(event)=>{updatefields(event,"msg")}}></input>
    </form>
        </div>
    )
}
export default Chatapp