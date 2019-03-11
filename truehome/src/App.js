import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { inmobiliarios } from './PropsInmobi.json';
import Dashboard from './own_components/Dashboard';
import './own_components/FormInm'
import './own_components/Dashboard.css';
import FormInm from './own_components/FormInm';
import { faUser, faHome, faStopwatch } from '@fortawesome/free-solid-svg-icons';
library.add(faUser)
library.add(faHome)
library.add(faStopwatch)

class App extends Component {
  //constructor
  constructor(){
    super();
    this.state = {
      inmobiliarios
    };
    this.handleAddCard = this.handleAddCard.bind(this);
  }

  //own functions
  handleAddCard(card){
    this.setState({
      //... Add into the created data.
      inmobiliarios : [...this.state.inmobiliarios, card]
    })
  }

  RemoveCard(index){
    console.log(index)
    if (window.confirm("Seguro de eliminar?")){
      this.setState({
        inmobiliarios : this.state.inmobiliarios.filter((e,i) =>{
          return i !== index
        })
      })
    }
  }
  //render method
  render() {
    const inmobiliarios = this.state.inmobiliarios.map((pin,i) => {
      return(
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h2>Direccion: { pin.direccion }</h2>
            <div className="card-body">
              <p>Nombre: { pin.nombre_titular }</p>
              <p>Tel: { pin.telefono }</p>
              <p>Email: { pin.email }</p>
            </div>
            <div className="card-footer">
              <span className="badge badge-pillow badge-info ml-2">
                Precio: { pin.precio }
              </span>
              <p>
              <button className="btn btn-danger" onClick={this.RemoveCard.bind(this,i)}>
                Eliminar
              </button>
              </p>
              <p>
              <button className="btn btn-warning"> 
                Editar
              </button>
              </p>
            </div>
            </div>
          </div>
        </div>
      )
    });
    return(
      <div className="App">

        <nav className="navbar navbar-dark bg-dark">
          <a href="/" className="text-white">
              Houses
              <span className="badge badge-pill badge-warning ml-2">
                  { this.state.inmobiliarios.length }
              </span>
          </a>
        </nav>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
            <FormInm onAddCard={this.handleAddCard}/>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="row">
            { inmobiliarios }
          </div>
        </div>
      </div>
    );
  }
}
//export default
export default App;