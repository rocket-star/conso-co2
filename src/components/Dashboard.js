import React, {Component} from 'react';
//import PopChart from './PopChart';
import NavBar from './NavBar';
import SimpleDonut from './SimpleDonut';
import LineChart from "./Line";
import Card from "./Card";
import Donut from "./Donut";
import A from "./Donut2";
//const f = require("../db_functions/functions")
require('dotenv').config();

// const max = 1000000
// function valueToPercent (value) {
//   return (value * 100) / max
// } 


function getCallsInfo(calls, mac) {
    let nb_calls = 0;
    calls.forEach(call => {
        if(call.codec.macAddress === mac){
            nb_calls++;   
        }
        });
        return nb_calls;
}

var getCallsEmission = function(calls, mac) {
  return new Promise(function(resolve, reject){
    const d = new Date();
    var currentMonth = d.getMonth();
    var currentYear = d.getFullYear();
    let obj = [];
    let emissionTotal = {avion:0, train:0, voiture:0, prix_voiture:0, prix_avion:0, prix_train:0};
    const regexSarah = RegExp('sarah@cisco*');
    const regexPierre = RegExp('pierre@cisco*');
    const regexBruno = RegExp('btouret@cisco*');
    calls.forEach(call => {
        let perMonth = false;
        const callDate = new Date(call.callHistory.StartTime);
        const callMonth = callDate.getMonth();
        const callYear = callDate.getFullYear();
        if(callYear === currentYear && callMonth === currentMonth) {
            perMonth = true;
        }
        
        if(call.codec.macAddress === mac){
            if((call.codec.macAddress === "6C:6C:D3:2B:F3:70" || call.codec.macAddress ==="F8:7B:20:1B:F7:5E") && (regexBruno.test(call.callHistory.CallbackNumber) || regexPierre.test(call.callHistory.CallbackNumber) || regexSarah.test(call.callHistory.CallbackNumber)) && perMonth){
                const emission = {avion:parseFloat(process.env.REACT_APP_CO2_S1_AVION), train:parseFloat(process.env.REACT_APP_CO2_S1_TRAIN), voiture:parseFloat(process.env.REACT_APP_CO2_S1_VOITURE), prix_voiture:parseFloat(process.env.REACT_APP_PRIX_S1_VOITURE), prix_avion:parseFloat(process.env.REACT_APP_PRIX_S1_AVION), prix_train:parseFloat(process.env.REACT_APP_PRIX_S1_TRAIN)}; //PARIS_LONDRE
                console.log('1');
                obj.push(emission);
            }
            if((call.codec.macAddress === "6C:6C:D3:2B:F3:70" || call.codec.macAddress ==="F8:7B:20:1B:F7:5E") && (!regexBruno.test(call.callHistory.CallbackNumber) || !regexPierre.test(call.callHistory.CallbackNumber) || !regexSarah.test(call.callHistory.CallbackNumber)) && perMonth){
                const emission = {avion:parseFloat(process.env.REACT_APP_CO2_S2_AVION), train:parseFloat(process.env.REACT_APP_CO2_S2_TRAIN), voiture:parseFloat(process.env.REACT_APP_CO2_S2_VOITURE), prix_voiture:parseFloat(process.env.REACT_APP_PRIX_S2_VOITURE), prix_avion:parseFloat(process.env.REACT_APP_PRIX_S2_AVION), prix_train:parseFloat(process.env.REACT_APP_PRIX_S2_TRAIN)}; //PARIS_LISBON
                console.log('2');
                obj.push(emission);
            }
            if((call.codec.macAddress === "B0:26:80:22:71:8A"|| call.codec.macAddress ==="08:96:AD:2E:13:87") && (regexBruno.test(call.callHistory.CallbackNumber) || regexPierre.test(call.callHistory.CallbackNumber) || regexSarah.test(call.callHistory.CallbackNumber)) && perMonth){
                const emission = {avion:parseFloat(process.env.REACT_APP_CO2_S3_AVION), train:parseFloat(process.env.REACT_APP_CO2_S3_TRAIN), voiture:parseFloat(process.env.REACT_APP_CO2_S3_VOITURE), prix_voiture:parseFloat(process.env.REACT_APP_PRIX_S3_VOITURE) , prix_avion:parseFloat(process.env.REACT_APP_PRIX_S3_AVION), prix_train:parseFloat(process.env.REACT_APP_PRIX_S3_TRAIN)}; //LISBON_LONDRE
                console.log('3');
                obj.push(emission);
            }
            if((call.codec.macAddress === "B0:26:80:22:71:8A"|| call.codec.macAddress ==="08:96:AD:2E:13:87") && (!regexBruno.test(call.callHistory.CallbackNumber) || !regexPierre.test(call.callHistory.CallbackNumber) || !regexSarah.test(call.callHistory.CallbackNumber)) && perMonth){
                const emission = {avion:parseFloat(process.env.REACT_APP_CO2_S4_AVION), train:parseFloat(process.env.REACT_APP_CO2_S4_TRAIN), voiture:parseFloat(process.env.REACT_APP_CO2_S4_VOITURE), prix_voiture:parseFloat(process.env.REACT_APP_PRIX_S4_VOITURE), prix_avion:parseFloat(process.env.REACT_APP_PRIX_S4_AVION), prix_train:parseFloat(process.env.REACT_APP_PRIX_S4_TRAIN)}; //LISBON_MADRID
                console.log('4');
                obj.push(emission);
            }
        }
        });
        obj.forEach(e => {
            emissionTotal.avion = emissionTotal.avion + e.avion;
            emissionTotal.train = emissionTotal.train + e.train;
            emissionTotal.voiture = emissionTotal.voiture + e.voiture;
            emissionTotal.prix_voiture = emissionTotal.prix_voiture + e.prix_voiture;
            emissionTotal.prix_avion = emissionTotal.prix_avion + e.prix_avion;
            emissionTotal.prix_train = emissionTotal.prix_train + e.prix_train;
        });
        resolve(emissionTotal); // emission en CO2 par mois par rapport au mois courant et par catégorie de véhicule
  });   
}

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            items: [],
            nbCalls: 0,
            mac: "",
            emission_total: {}
        }
    }
    componentDidMount() {
        console.log(this.props.mac)
        fetch('http://websrv.ciscofrance.com:15140/api/call',
          {
            method: 'get'
          })
          .then(res => res.json())
          .then(
            (result) => {
              getCallsEmission(result, this.props.mac).then(res => {
                this.setState({
                    isLoaded: true,
                    items: result,
                    nbCalls: getCallsInfo(result, this.props.mac),
                    emission_total: res,
                  });
              })
            },
            // Remarque : il est important de traiter les erreurs ici
            // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
            // des exceptions provenant de réels bugs du composant.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
    }

render(){
  const { isLoaded } = this.state
    if (this.state.items) {
        console.log(this.state.nbCalls);
        console.log(this.state.emission_total.prix_avion);
      }
    return (
    <div className="container" style={{padding: '0%'}}>
      <NavBar />
      <div className="inside">
        <div className="panel">
          {isLoaded &&
          <Card emission={this.state.emission_total}/>
          }
        </div>
        <div className="donut">
          {isLoaded &&
            <Donut prix={[Math.round(this.state.emission_total.prix_train), Math.round(this.state.emission_total.prix_avion), Math.round(this.state.emission_total.prix_voiture)]}/>
          }
        </div>
      </div>
      <div>
      <h1 style={{padding: '10%', textAlign:'center'}}>Depuis sa mise en service ce terminal a permis d'effectuer : {this.state.nbCalls} appels</h1>
      </div>
    </div>
    
    );
    
}
}

export default Dashboard;