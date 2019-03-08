import React from 'react';
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Dashboard extends Component{
    render(){
        return(
          <div className="container">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        <span><FontAwesomeIcon icon="user"/></span>
                        <span>Users</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        <span><FontAwesomeIcon icon="home"/></span>
                        <span>Houses</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        <span><FontAwesomeIcon icon="stopwatch"/></span>
                        <span>Prices</span>
                    </a>
                </li>
            </ul>
          </div>
        );
    }
}
export default Dashboard;