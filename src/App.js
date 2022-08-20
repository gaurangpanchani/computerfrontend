
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateComputer from './components/CreateComputer';
import ShowComputerList from './components/ShowComputerList';
import UpdateComputerInfo from './components/UpdateComputerInfo';
import ShowComputerDetails from './components/ShowComputerDetails';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowComputerList} />
          <Route path='/create-computer' component={CreateComputer} />
          <Route path='/edit-computer/:id' component={UpdateComputerInfo} />
          <Route path='/show-computer/:id' component={ShowComputerDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
