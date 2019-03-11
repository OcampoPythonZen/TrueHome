import React, { Component } from 'react';

class FormInm extends Component{
    constructor(){
        super();
        this.state = {
            "direccion" : "",
            "nombre_titular" : "",
            "telefono" : "",
            "email" : "",
            "precio" : ""
        };
    }
    render(){
        return(
            <div className="card">
              <div className="card-body">
                <div className="form-group">
                  <input
                      type="text"
                      name="title"
                      className="form-control"
                      placeholder="dirección de la vivienda"
                  />
                </div>
                <div className="form-group">
                  <input
                      type="text"
                      name="responsible"
                      className="form-control"
                      placeholder="nombre titular"
                  />
                </div>
                <div className="form-group">
                  <input
                      type="text"
                      name="description"
                      className="form-control"
                      placeholder="telefono"
                  />
                </div>
                <div className="form-group">
                  <input
                      type="email"
                      name="description"
                      className="form-control"
                      placeholder="email"
                  />
                </div>
                <div className="form-group">
                  <input
                      type="text"
                      name="description"
                      className="form-control"
                      placeholder="precio de la vivienda"
                  />
                </div>
              </div>
            </div>
        );
    }
}
export default FormInm;