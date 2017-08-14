import * as React from 'react';

export const VehicleComponent = () => {
  return (
    <div>
      <br />
      <form>
        {/*bloque de dropdown Matricula*/}
        <div className="col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Introduce Matricula..." />
            <span className="input-group-btn">
              <button className="btn btn-info btn-search" type="button"></button>
            </span>
          </div>
        </div>
        {/*bloque de dropdown Marca*/}
        <div className="col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Introduce Marca..." />
            <span className="input-group-btn">
              <button className="btn btn-secondary" type="button">Go!</button>
            </span>
          </div>
        </div>
        {/*bloque de dropdown Modelo*/}
        <div className="col-lg-6">
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
        <div className="col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Introduce Versión..." />
            <span className="input-group-btn">
              {/*<button className="btn btn-secondary" type="button">Imagen Buscar</button>*/}
            </span>
          </div>
        </div>

        {/*Bloque de Año*/}
        <div className="col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Introduce Año Matriculación..." />
            <span className="input-group-btn">
              <button className="btn btn-secondary" type="button">Imagen Buscar</button>
            </span>
          </div>
        </div>
        {/*Bloque de Km*/}
        <div className="col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Introduce km..." />
            <span className="input-group-btn">
              <button className="btn btn-secondary" type="button">Imagen Buscar</button>
            </span>
          </div>
        </div>
        {/*Bloque de NºBastidor*/}
        <div className="col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Introduce Nº Bastidor..." />
            <span className="input-group-btn">
              <button className="btn btn-secondary" type="button">Imagen Buscar</button>
            </span>
          </div>
        </div>
        {/*Bloque de Combustible*/}
        <div className="col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Introduce Combustible..." />
            <span className="input-group-btn">
              <button className="btn btn-secondary" type="button">Imagen Buscar</button>
            </span>
          </div>
        </div>
        {/*Bloque de ITV*/}
        <div className="col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Introduce Fecha ITV..." />
            <span className="input-group-btn">
              <button className="btn btn-secondary" type="button">Imagen Buscar</button>
            </span>
          </div>
        </div>

        {/*Bloque de Escaneo ficha tecnica*/}
        <div className="col-lg-6">
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Escanear Ficha tecnica
        </button>

          <div className="modal fade" id="exampleModalLong" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  ...
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
          {/*<div className="input-group">
            <input type="text" className="form-control" placeholder="Introduce Ficha Técnica..." />
            <span className="input-group-btn">
              <button className="btn btn-secondary" type="button">Imagen Buscar</button>
            </span>
          </div>*/}
        </div>

        {/*Bloque obsevaciones*/}
        <div className="form-group">
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
    </div>
  );
};
