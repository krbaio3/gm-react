import * as React from 'react';
import { InputPerformance } from '../shared/input/inputPerformance';
import { InputSimple } from '../shared/input/InputSimple';
import { TextArea } from '../shared/text-area/text-area';
import { ModalCustom } from '../shared/modal/modal';
// import * from './vehicle.service';
require('./vehicle.scss');

interface Props {
}

export const VehicleComponent = (props: Props) => {

  const callToServiceMatricula = () => {
    console.log(`llamada a servicio Matricula`);
  };
  const callToServiceMarca = () => {
    console.log(`llamada a servicio Marca`);
  };
  const callToServiceModelo = () => {
    console.log(`llamada a servicio Modelo`);
  };

  return (
    <div>
      <br />
      <ModalCustom/>
      <form className="form-inline">
        {/*bloque de Matricula*/}
        <InputPerformance onSearchClick={callToServiceMatricula}
          placeholder="Introduce Matricula..."
          icono="fa fa-search" />

        {/*bloque de Marca*/}
        <InputPerformance onSearchClick={callToServiceMarca}
          placeholder="Introduce Marca..."
          icono="fa fa-search" />

        {/*bloque de Modelo*/}
        <InputPerformance onSearchClick={callToServiceModelo}
          placeholder="Introduce Modelo..."
          icono="fa fa-search" />

        {/*Bloque de Version*/}
        <div className="col-xs-4 col-lg-6 mb-2">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Introduce Versión..." />
            <span className="input-group-btn" />
          </div>
        </div>

        {/*Bloque de Combustible*/}
        <div className="col-12 col-sm-12 col-lg-6 mb-2 ml-2">
          <div className="btn-group" >
            <label className="btn btn-info">
              <input type="radio" name="options" id="option1" /> Gasolina
          </label>
            <label className="btn btn-info">
              <input type="radio" name="options" id="option2" /> Diesel
          </label>
          </div>
        </div>
        {/*Bloque de Año*/}
        <InputSimple
          icono="fa fa-calendar" tipo="date" />

        {/*Bloque de Km*/}
        <InputSimple
          placeholder="Introduce km..."
          icono="fa fa-road" />

        {/*Bloque de NºBastidor*/}
        <InputSimple
          placeholder="Introduce Nº Bastidor..."
          icono="fa fa-car" />

        {/*Bloque de ITV*/}
        <InputSimple
          icono="fa fa-calendar" tipo="date" />

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
        <TextArea observaciones="Observaciones" />
        {/*Bloque Numero de PR*/}
        {/*<label>Label1</label>
        <input type="text" />
        <button className="btn btn-search" />*/}
        <button type="submit" className="btn btn-success">Aceptar</button>
        <button type="reset" className="btn btn-danger ml-2">Cancelar</button>
      </form>
    </div >
  );
};
