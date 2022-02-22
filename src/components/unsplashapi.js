import React from "react";
import axios from "axios"
class Unsplash extends React.Component{
    constructor(props){
        super(props)
        this.state={
            image:[],
            search:""
        }
    }
    callNewsAPI(searchip){
        axios.get("https://api.unsplash.com/search/photos?client_id=AHLAilN5ym29KFV1nA-LXpCeCD498odsXqM0M1mjyOA="+searchip)
        .then((res)=>this.setState({image:res.data.result}))
        .catch((err)=>console.log(err))
    }
    handleapi=()=>{
        this.callNewsAPI(this.state.search)
    }
    setSearch=(event)=>{
        this.setState({search:event.target.value})
    }
    render(){
        return(
            <div>
                <h1> image search</h1>
                <form>
                    <input type="text" placeholder="enter the search text"
                    onChange={this.setSearch}></input>
                    
                </form>
                <button onClick={this.handleapi}>search</button>
                
                {
                    this.state.image.map(
                            (item)=>(
                                <img scr={item.urls.small}></img>
                        )
                    )
                }
            </div>
        )
    }
}
export default Unsplash