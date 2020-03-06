import React, {Component} from 'react';
import Typical from 'react-typical';
import logo from '../cisco_logo.png'

class NavBar extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = { 
    //     }
    // }

render(){
    return (
        <div className="navbar">
        <img src={logo} alt={"logo"} className="img"/> 
            <p style={{margin: '0%', display: "contents"}}>Analytics <Typical
        steps={[': Reduce CO2 emissions !', 2000, ': Be more ecological !', 3000, ': Use Webex Teams !', 14000]}
        //loop={Infinity} //pour tourner l'animation en boucle
        wrapper="p"
      /></p>
           
        </div>
    );
    
}
}

export default NavBar;