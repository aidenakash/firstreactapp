import React from "react";
const Pending=(props)=>{
    console.log(props)
    return(
        <div>
            <h2>the pending tasks are:</h2>
            {
                props.items.map((item)=>
                <div>
                <p>{item.title}</p>
                <button onClick={()=>props.fun1(item.id)}>done</button>
                </div>
                )
            }
        </div>
    )
}
export default Pending