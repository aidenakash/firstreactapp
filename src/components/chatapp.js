import React from "react";
class ChatApp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:"",
            msg:"",
        }
    }
    updateFields=(event,key)=>{
        if (key==="username"){
this.setState({username:event.target.value})
        }
        else if(key==="msg"){
this.setState({msg:event.target.value})
        }
    }
    
    render(){
        return(
            <div>
                <h2>you hava a message:{this.state.msg}</h2>
                <h2>from:{this.state.username}</h2>
<form>
    <input type="text"placeholder="enter your name"onChange={(event)=>{this.updateFields(event,"username")}}></input>
    <input type="text"placeholder="enter your message"onChange={(event)=>{this.updateFields(event,"msg")}}></input>
</form>
</div>
        )
    }
}
export default ChatApp
