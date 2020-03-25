import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from "./components/Dashboard";

const Dashboard1 = ({ match, location }) => {
  return (
    <div>
    <Dashboard mac={match.params.mac}/>
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
