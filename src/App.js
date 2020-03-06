import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
//require('dotenv').config();

const Dashboard1 = ({ match, location }) => {
  return (
    <div>
    <Dashboard mac={match.params.mac}/>
    {/* <pre>{process.env.REACT_APP_VAR}</pre> */}
    </div>
  );
};

function App() {
  return (
    <Router>
        <Route path="/:mac" component={Dashboard1} />
      </Router>
  );
}

export default App;
