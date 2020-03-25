import React, {Component} from 'react';
import './EmissionCard.css';

function precise(x) {
    return Number.parseFloat(x).toPrecision(3);
}

class EmissionCard extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = { 
    //     }
    // }

render(){
    return (
        // <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <div className="card">
        <h1 style={{textAlign:'center', color:'white'}}>Ce Terminal à permis d'économiser ce mois-ci</h1>
        <div className="container-card">
            <div className="car">
            <i className="material-icons" style={{alignSelf: "center"}}>directions_car</i>
            <h3><strong>{precise(this.props.emission.voiture)}</strong>t de CO2</h3>
            </div>
            
            <div className="train">
            <i className="material-icons" style={{alignSelf: "center", color:"teal"}}>train</i>
            <h3><strong>{precise(this.props.emission.train)}</strong>t de CO2</h3>
            </div>

            <div className="flight">
            <i className="material-icons" style={{alignSelf: "center", color:"chocolate"}}>flight</i>
            <h3><strong>{precise(this.props.emission.avion)}</strong>t de CO2</h3>
            </div>   
        </div>
        <div>
        <h1 style={{textAlign:'center', color:'white'}}> Et à effectué {this.props.nbCallMonth} appels</h1>
        </div>
        </div>
    );
    
}
}

export default EmissionCard;