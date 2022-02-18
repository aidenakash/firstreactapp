import React from "react";
import axios from "axios";
class Todoapi extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todos:[]
        }
    }
    calltodo(){
    /*setTimeout(
        ()=>{ 
            fetch("https://jsonplaceholder.typicode.com/todos")
                    .then((res)=>res.json())
                    .then((data)=>this.setState({todos:data}))
                   },2000)*/
                   axios.get("https://jsonplaceholder.typicode.com/todos")
                   .then((res)=>this.setState({todos:res.data}))
                   .catch((err)=>console.log(err))
                       }
    
    render(){
        return(
            <div>
                <h2>To Do Api</h2>
                <button onClick={()=>this.calltodo()
                }>submit</button>
                {
                    this.state.todos.map(
                        (item)=>(
                        <div>
                            <p>{item.title}</p>
                        </div>
                        )
                    )
                }
            </div>
        )
    }
}
export default Todoapi