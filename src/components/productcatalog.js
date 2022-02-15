import React from "react";
function pcatalog(props)
{
    return(
        <div>
            
       <h1>{props.obj.prname}</h1>
       
       <img src={props.obj.imgsrc}></img>
       
       <h2>{props.obj.rating}</h2>
       
       </div>
           )
}
export default pcatalog;