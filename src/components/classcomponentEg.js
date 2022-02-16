import React from "react"
class ClassComp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            msg:"welcome",
            loggedIn:false,
            userName:"user"
        }
    }
   
    changeloginStatus=()=>{
        this.setState({loggedIn:true})
    }
    changeusername=()=>{
        this.setState({userName:this.props.fname})
    }
    render(){
        return( 
        <div>
            {this.state.loggedIn? 
            <div>

            <h2>{this.state.msg}{this.state.userName}</h2>

            <button onClick={this.changeuserName}>changeusername</button>
            </div>

            :<button onClicks={this.changelogInStatus}>login</button>}
            </div>
        )
    }
}
export default ClassComp