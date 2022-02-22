import React from "react";
import axios from "axios";
class Weather extends React.Component{
    constructor(props){
        super(props)
        this.state={
            water:([]),
            search:"",
        }
    }
    callweatherapi(ip){
        if(!ip === "enter") return
        axios.get("https://api.openweathermap.org/data/2.5/weather?&appid=9a0404b321841d2c40483d1a4730de4d"+ip)
        .then((res)=>this.setState({water:[res.data.min]}))
        .catch((err=>console.log(err)))
    }
    handleapi=(e)=>{
        e.preventDefault()
        this.callweatherapi(this.state.search)
    }
    setSearch=(event)=>{
        this.setState({search:event.target.value})
    }
    render(){
return(
    <div>
        <h1>weather Api</h1>
        <form>
        <div class="input-group mb-4 w-75 mx-auto">
                                        <input type="search"
                                            class="form-control"
                                            placeholder="search city"
                                            aria-label="search city"
                                            aria-describedby="basic-addon2" onChange={this.setSearch}/>
                                        <button onClick={this.handleapi}>search</button>
                                        </div>
        </form>
        {
            this.state.water.map((item,index)=>(
                <>temp:{(item.temp-273.15).toFixed(2)} C</>
            ))
        }
    </div>
)
    }
}
export default Weather
