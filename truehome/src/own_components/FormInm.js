import React, { Component } from 'react';

class FormInm extends Component{
    //constructor app
    constructor(){
        super();
        this.state = {
            "direccion" : "",
            "nombre_titular" : "",
            "telefono" : "",
            "email" : "",
            "precio" : ""
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // own_functions
    handleInput(e){
      const { value, name } = e.target;
      this.setState({
        [name] : value
      })
      console.log(this.state);
    }

    handleSubmit(e){
      e.preventDefault();
      this.props.onAddCard(this.state);
      console.log("Sending data")
    }
    //render method
    render(){
        return(
            <div className="card">
              <form className="card-body" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                      type="text"
                      name="direccion"
                      className="form-control"
                      placeholder="dirección de la vivienda"
                      onChange={ this.handleInput }
                  />
                </div>
                <div className="form-group">
                  <input
                      type="text"
                      name="nombre_titular"
                      className="form-control"
                      placeholder="nombre titular"
                      onChange={ this.handleInput }
                  />
                </div>
                <div className="form-group">
                  <input
                      type="text"
                      name="telefono"
                      className="form-control"
                      placeholder="telefono"
                      onChange={ this.handleInput }
                  />
                </div>
                <div className="form-group">
                  <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="email"
                      onChange={ this.handleInput }
                  />
                </div>
                <div className="form-group">
                  <input
                      type="text"
                      name="precio"
                      className="form-control"
                      placeholder="precio de la vivienda"
                      onChange={ this.handleInput }
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Guardar
                </button>
              </form>
            </div>
        );
    }
}
//export
export default FormInm;