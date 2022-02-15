import React from 'react'
import pcatalog from './components/productcatalog';
function App(props){
        return(
     <pcatalog 
     obj={{
        prname:"samsung",
        imgsrc:"https://m.media-amazon.com/images/I/811lrGbXwIL._AC_UY218_.jpg",
        rating:" Rating 4.5"
        }} ></pcatalog>
    )
    }



export default App;