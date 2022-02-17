import React from "react";
class Sign extends React.Component{
    constructor(props){
        super(props)
        this.state={
            fname:"",
            lname:"",
            funame:"",
            pass:"", 
            uname:"",
            gender:""
            
        }
    }
updatearea=(event,key)=>{
    if(key==="fname")
    {
    this.setState({fname:event.target.value})
    }
    else if(key==="lname")
    {
    this.setState({lname:event.target.value})
    }
    else if(key==="funame"){
        this.setState({funame:event.target.value})
    }   
    else if(key==="uname"){
        this.setState({uname:event.target.value})
    }
    else if(key==="pass"){
        this.setState({pass:event.target.value})
    }
}
onChange= (event) =>{
    this.setState({gender:event.target.value})
}
    render(){
        return(
        <div>
            <form>
                <h1>Sign In Form</h1>

                <h2>first name:{this.state.fname}</h2>
                <input type="text"placeholder="enter your first name"onChange={(event)=>{this.updatearea(event,"fname")}}></input>
                
                <h2>last name:{this.state.lname}</h2>
                <input type="text"placeholder="enter your last name" onChange={(event)=>{this.updatearea(event,"lname")}}></input>
                
                <h2>full name:{this.state.funame}</h2>
                <input type="text"placeholder="enter your full name" onChange={(event)=>{this.updatearea(event,"funame")}}></input>
            
            <h2>gender is:</h2>
             male<input type="radio"onChange={this.onChange}></input> 
             female<input type="radio"onChange={this.onChange}></input> 
                
                <h2>username:{this.state.uname}</h2>
                <input type="text"placeholder="enter your user name" onChange={(event)=>{this.updatearea(event,"uname")}}></input>

                <h2>password:{this.state.pass}</h2>
                <input type="text"placeholder="enter your password" onChange={(event)=>{this.updatearea(event,"pass")}}></input>
                
                </form>
        </div>
        )
    }
}
export default Sign