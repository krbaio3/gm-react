import * as React from 'react';
// require('./client.scss');

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
              <button className="btn btn-info" type="button">
                <i className="fa fa-search" aria-hidden="true" />
              </button>
            </span>
          </div>
        </div>
        {/*bloque de dropdown Modelo*/}
        <div className="col-xs-4 col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Introduce Modelo..." />
            <span className="input-group-btn">
              <button className="btn btn-info" type="button">
                <i className="fa fa-search" aria-hidden="true" />
              </button>
            </span>
          </div>
        </div>
        {/*Bloque de Version*/}
        <div className="col-xs-4 col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Introduce Versión..." />
            <span className="input-group-btn">
              {/*<button className="btn btn-secondary" type="button">Imagen Buscar</button>*/}
            </span>
          </div>
        </div>
        {/*Bloque de Combustible*/}
        <div className="col-12 col-sm-12 col-lg-6">
          <div className="input-group" >
              <span className="input-group-addon">
                <i className="icon-gas-station" aria-hidden="true"></i>
              </span>
            <span className="input-group-addon">
              <input type="radio" name="combustible" aria-label="Radio button for following text input" />
            </span>
            <span className="input-group-addon">Gasolina</span>              
            <span className="input-group-addon">
              <input type="radio" name="combustible" aria-label="Radio button for following text input" />
            </span>
            <span className="input-group-addon">Diesel</span>
          </div>
        </div>
        {/*Bloque de Año*/}
        <div className="col-xs-4 col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Introduce Fecha Matriculación..." />
            <span className="input-group-btn">
              <span className="input-group-addon">
                <i className="fa fa-calendar" aria-hidden="true"></i>
              </span>
            </span>
          </div>
        </div>
        {/*Bloque de Km*/}
        <div className="col-xs-4 col-lg-6">
          <div className="input-group">
            <input type="number" className="form-control" placeholder="Introduce km..." />
            <span className="input-group-addon">
              <i className="fa fa-road" aria-hidden="true"></i>
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

        {/*Bloque de ITV*/}
        <div className="col-xs-4 col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Introduce Fecha ITV..." />
            <span className="input-group-addon add-on">
              <i className="fa fa-calendar" aria-hidden="true"></i>
            </span>
          </div>
        </div>

        {/*Bloque de Escaneo ficha tecnica*/}
        <div className="col-4 col-lg-6">
          <div className="input-group">
          <span className="input-group-addon">Ficha Escaneada?</span>
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
