import React from "react"
export const Catalog=(props)=>
{
    return(
        <div>
            <h2>{props.obj.pname}</h2>
            
            <h3>{props.obj.rating}</h3>
        </div>
    )
}
