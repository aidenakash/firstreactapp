import React from "react";
import Pending from "./pending";
import Complit from "./complit";
import Trash from "./Trash";
const datas=[
    {
       status:true,
        title:"buy egg",
        id:1,
        active:true,
    },
    {
        status:false,
         title:"buy milk",
         id:2,
         active:true,
     },
     {
        status:true,
         title:"go gym",
         id:3,
         active:true,
     },
     {
        status:false,
         title:"watching tv",
         id:4,
         active:true,
     },
    ]
class Todo extends React.Component
{
    constructor(props){
        super(props)
        this.state={ 
            data:datas
        }
    }
    getPendingItems=()=>{
        const arr=this.state.data.filter((item)=>item.status===false)
        return arr
    }
    ChangeCompletion=(dataid)=>{
        const temp=[...this.state.data]
        const result=temp.find((item)=>(item.id===dataid))
        result.status=!result.status
        this.setState({data:temp})  
    }
    ChangeStatus=(dataid)=>{
        const temp=[...this.state.data]
        const result=temp.find((item)=>(item.id===dataid))
        result.active=!result.active
        this.setState({data:temp})
    }
    render(){
        return(
            <div>
                <h1>To Do Application </h1>
                <Pending items={this.getPendingItems()}fun1={this.ChangeCompletion}></Pending>
                <Complit items={this.getComplitItems()}fun2={this.ChangeStatus}></Complit>
                <Trash></Trash>
            </div>
        )
    }
}
export default Todo