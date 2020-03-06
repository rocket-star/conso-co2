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
        <h1 style={{textAlign:'center'}}>Ce Terminal à permis d'économiser ce mois-ci</h1>
        <div className="container">
            <div className="flight">
            <i className="material-icons">flight</i>
            <h3>Pour un voyage (Aller/Retour) en avion le taux de CO2 est estimer à : <strong>{precise(this.props.emission.avion)}</strong> tonne de CO2</h3>
            </div>
            <hr></hr>
            <div className="train">
            <i className="material-icons">train</i>
            <h3>Pour un voyage (Aller/Retour) en train le taux de CO2 est estimer à : <strong>{precise(this.props.emission.train)}</strong> tonne de CO2</h3>
            </div>
            <hr></hr>
            <div className="car">
            <i className="material-icons">directions_car</i>
            <h3>Pour un voyage (Aller/Retour) en voiture le taux de CO2 est estimer à : <strong>{precise(this.props.emission.voiture)}</strong> tonne de CO2</h3>
            </div>
        </div>
        </div>
    );
    
}
}

export default EmissionCard;