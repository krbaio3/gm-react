import * as React from 'react';
require('./vehicle.scss');

export const VehicleComponent = () => {
  return (
    <div>
      <br />
      <form>
        {/*bloque de dropdown Matricula*/}
        <div className="col-xs-4 col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Introduce Matricula..." />
            <span className="input-group-btn">
              <button className="btn btn-info" type="button">
                <i className="fa fa-search" aria-hidden="true" />
              </button>
            </span>
          </div>
        </div>
        {/*bloque de dropdown Marca*/}
        <div className="col-xs-4 col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Introduce Marca..." />
            <span className="input-group-btn">
              <button className="btn btn-secondary" type="button">Go!</button>
            </span>
          </div>
        </div>
        {/*bloque de dropdown Modelo*/}
        <div className="col-xs-4 col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Introduce Modelo..." />
            <span className="input-group-btn">
              <button className="btn btn-secondary" type="button">Go!</button>
            </span>
          </div>
        </div>
        {/*<div className="dropdown">
          <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Modelo</button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </div>*/}
        {/*Bloque de Version*/}
        <div className="col-xs-4 col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Introduce Versión..." />
            <span className="input-group-btn">
              {/*<button className="btn btn-secondary" type="button">Imagen Buscar</button>*/}
            </span>
          </div>
        </div>

        {/*Bloque de Año*/}
        <div className="col-xs-4 col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Introduce Año Matriculación..." />
            <span className="input-group-btn">
              <button className="btn btn-secondary" type="button">Imagen Buscar</button>
            </span>
          </div>
        </div>

        <div className="form-group col-xs-4 col-lg-6">
          <div className="col-xs-5 date">
            <div className="input-group input-append date" id="datePicker" data-provide="datepicker">
              <input type="text" className="form-control" name="date" />
              <span className="input-group-addon add-on">
                <i className="fa fa-calendar" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>

        {/*Bloque de Km*/}
        <div className="col-xs-4 col-lg-6">
          <div className="input-group">
            <input type="number" className="form-control" placeholder="Introduce km..." />
            <span className="input-group-btn">
              <button className="btn btn-secondary" type="button">Imagen Buscar</button>
            </span>
          </div>
        </div>
        {/*Bloque de NºBastidor*/}
        <div className="col-xs-4 col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Introduce Nº Bastidor..." />
            <span className="input-group-addon add-on">
              <i className="fa fa-car" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        {/*Bloque de Combustible*/}
        <div className="col-xs-4 col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Introduce Combustible..." />
            <span className="input-group-addon add-on">
              <i className="fa gas-station" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        {/*Bloque de ITV*/}
        <div className="col-xs-4 col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Introduce Fecha ITV..." />
            <span className="input-group-btn">
              <button className="btn btn-secondary" type="button">Imagen Buscar</button>
            </span>
          </div>
        </div>

        {/*Bloque de Escaneo ficha tecnica*/}
        <div className="col-xs-4 col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" aria-label="Ficha Escaneada?" placeholder="¿Ficha Escaneada?" disabled />
            <span className="input-group-addon">
              <input type="checkbox" aria-label="Checkbox for Ficha Escaneada" disabled />
            </span>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
              Escanear Ficha
          </button>
          </div>
        </div>

        {/*Bloque obsevaciones*/}
        <div className="form-group col-xs-4 col-lg-6">
          <label htmlFor="obervationTextarea">Observaciones</label>
          <textarea className="form-control" id="obervationTextarea" ></textarea>
        </div>
        {/*Bloque Numero de PR*/}
        {/*<label>Label1</label>
        <input type="text" />
        <button className="btn btn-search" />*/}
        <button type="submit" className="btn btn-success">Aceptar</button>
        <button type="reset" className="btn btn-danger">Cancelar</button>
      </form>
    </div >
  );
};
