import * as React from 'react';
// require('./client.scss');

export const ClientComponent = () => {
  return (
    <div>
      <br />
      <form>
        {/*bloque de input NumCli*/}
        <div className="col-xs-4 col-lg-6 mb-2">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="NumCli" disabled />
          </div>
        </div>
        {/*bloque de input Codigo*/}
        <div className="col-xs-4 col-lg-6 mb-2">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Codigo" disabled />
          </div>
        </div>
        {/*bloque de input Grupo*/}
        <div className="col-xs-4 col-lg-6 mb-2">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Grupo" disabled />
          </div>
        </div>
        {/*bloque de input Nombre*/}
        <div className="col-xs-4 col-lg-6 mb-2">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Introduce Nombre..." />
            {/* <span className="input-group-btn">
              <button className="btn btn-info" type="button">
                <i className="fa fa-search" aria-hidden="true" />
              </button> 
            </span>*/}
          </div>
        </div>
        {/*bloque de input Apellidos*/}
        <div className="col-xs-4 col-lg-6 mb-2">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Introduce Apellidos..." />
            {/* <span className="input-group-btn">
              <button className="btn btn-info" type="button">
                <i className="fa fa-search" aria-hidden="true" />
              </button>
            </span> */}
          </div>
        </div>
        {/*bloque de input tipo de Docuento*/}
        <div className="col-xs-12 col-lg-6 mb-2 ml-2">
          <select className="custom-select" id="inlineFormCustomSelect">
            <option selected>Tipo Docuento  </option>
            <option value="DNI">DNI</option>
            <option value="CIF">CIF</option>
            <option value="NIE">NIE</option>
            <option value="OTRO">OTRO</option>
          </select>
        </div>
        {/*Bloque de Numero de Documento*/}
        <div className="col-xs-4 col-lg-6 mb-2">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Introduce Numero de Documento..." />
            <span className="input-group-btn">
              <button className="btn btn-info" type="button">
                <i className="fa fa-search" aria-hidden="true" />
              </button>
            </span>
          </div>
        </div>
        {/*Bloque de Direccion*/}
        <div className="col-xs-4 col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Introduce Direccion de Facturacion..." />
            <span className="input-group-btn">
              <span className="input-group-addon">
                <i className="fa fa-calendar" aria-hidden="true"></i>
              </span>
            </span>
          </div>
        </div>
        {/*Bloque de CP*/}
        <div className="col-xs-4 col-lg-6">
          <div className="input-group">
            <input type="number" className="form-control" placeholder="Introduce CP" />
            <span className="input-group-addon">
              <i className="fa fa-road" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        {/*Bloque de Localidad*/}
        <div className="col-xs-4 col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Introduce Localidad..." />
            <span className="input-group-addon add-on">
              <i className="fa fa-car" aria-hidden="true"></i>
            </span>
          </div>
        </div>

        {/*Bloque de Provincia*/}
        <div className="col-xs-4 col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Introduce Provincia..." />
            <span className="input-group-addon add-on">
              <i className="fa fa-calendar" aria-hidden="true"></i>
            </span>
          </div>
        </div>

        {/*Bloque de Pais*/}
        <div className="col-xs-4 col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Introduce Pais..." />
            <span className="input-group-addon add-on">
              <i className="fa fa-calendar" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        {/*Bloque de Telefono`*/}
        <div className="col-xs-4 col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Introduce Telefono1..." />
            <span className="input-group-addon add-on">
              <i className="fa fa-calendar" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        {/*Bloque de Telefono2*/}
        <div className="col-xs-4 col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Introduce Telefono2..." />
            <span className="input-group-addon add-on">
              <i className="fa fa-calendar" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        {/*Bloque de Fax*/}
        <div className="col-xs-4 col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Introduce Fax..." />
            <span className="input-group-addon add-on">
              <i className="fa fa-calendar" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        {/*Bloque de Email*/}
        <div className="col-xs-4 col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Introduce Email..." />
            <span className="input-group-addon add-on">
              <i className="fa fa-calendar" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        {/*Bloque de numPol*/}
        <div className="col-xs-4 col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Introduce Numero de Poliza..." />
            <span className="input-group-addon add-on">
              <i className="fa fa-calendar" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        {/*Bloque de TipoIva*/}
        <div className="col-xs-4 col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Introduce tipo Iva..." />
            <span className="input-group-addon add-on">
              <i className="fa fa-calendar" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        {/*Bloque de Dto*/}
        <div className="col-xs-4 col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Introduce Dto..." />
            <span className="input-group-addon add-on">
              <i className="fa fa-calendar" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        {/*Bloque de Fecha Pago*/}
        <div className="col-xs-4 col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Introduce Fecha Pago..." />
            <span className="input-group-addon add-on">
              <i className="fa fa-calendar" aria-hidden="true"></i>
            </span>
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
