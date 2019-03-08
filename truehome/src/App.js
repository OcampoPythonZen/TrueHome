import React, { Component } from 'react';
import './App.css';
import Dashboard from './own_components/Dashboard';
import './own_components/Dashboard.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core';

import { faUser, faHome, faStopwatch } from '@fortawesome/free-solid-svg-icons';
library.add(faUser)
library.add(faHome)
library.add(faStopwatch)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard/>
      </div>
    );
  }
}
export default App;
