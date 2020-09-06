import React, {Component} from 'react'
import '../css/main.css'
import Navigation from './Navigation'

class MainHeader extends Component {
    render(){
         return(
             <div>
                 <div>
                    <div>
                        <Navigation />
                    </div>
                     <div className="overlay-black-transparent">
                        <img alt="mainpage" className="w-100 black-transparent" src={require("../images/MainPage.png")}/>
                     </div>
                     <h1 className="mainHeading">SINGAPORE</h1>
                 </div>
             </div>
         );
    }
}

export default MainHeader