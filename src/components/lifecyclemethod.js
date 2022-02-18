import React from "react";
class Lifecycle extends React.Component{
    constructor(props){
        super(props)
        this.state={
            msg:"initial"
        }
    }
    render(){
        return(
            <div>
                <h2>Lifecycle method {this.state.msg}</h2>
                <button onClick={()=>this.setState({msg:"initializing"})}>change</button>
            </div>
        )
    }
}
export default Lifecycle