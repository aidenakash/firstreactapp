import React from "react";
const Complit=(props)=>{
    return(
        <div>
            <h2>The complit tasks are:</h2>
            {
                
                props.items.map((item)=>
                item.active?
                <div>
                <p>{item.title}</p>
                <button onClick={()=>props.fun2(item.id)}>delet</button>
                </div>:<></>
                )
                    
                   
            }
        </div>
    )
}
export default Complit