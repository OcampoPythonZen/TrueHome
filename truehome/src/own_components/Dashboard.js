import React from 'react';
import { Component } from 'react';
import inmobiliarios from '../PropsInmobi.json';

class Dashboard extends Component{
    constructor(){
        super();
        this.state = {
            inmobiliarios
        }
    }
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
                <a href="/" className="text-white">
                    { this.props.title }
                    <span className="badge badge-pill badge-warning ml-2">
                        { this.state.inmobiliarios.length }
                    </span>
                </a>
            </nav>
        );
    }
}
export default Dashboard;
        //   <div className="container">
        //     <ul className="nav flex-column">
        //         <li className="nav-item">
        //             <a href="#" className="nav-link">
        //                 <span><FontAwesomeIcon icon="user"/></span>
        //                 <span>Users</span>
        //             </a>
        //         </li>
        //         <li className="nav-item">
        //             <a href="#" className="nav-link">
        //                 <span><FontAwesomeIcon icon="home"/></span>
        //                 <span>Houses</span>
        //             </a>
        //         </li>
        //         <li className="nav-item">
        //             <a href="#" className="nav-link">
        //                 <span><FontAwesomeIcon icon="stopwatch"/></span>
        //                 <span>Prices</span>
        //             </a>
        //         </li>
        //     </ul>
        //   </div>
