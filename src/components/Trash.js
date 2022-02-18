import React from "react";
const Trash=(props)=>{
    console.log(props)
    return(
        <div>
            <h2>the deleted tasks are:</h2>
            {
                props.items.map((item)=>
                <div>
                <p>{item.title}</p>
            
                </div>
                )
            }
        </div>
    )
}
export default Trash