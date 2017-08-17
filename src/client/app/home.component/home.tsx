import * as React from 'react';
// import { VehicleComponent } from '../vehicle.component/vehicle';
import { NavBar } from '../navbar.component/navBar';
import { Social } from '../social.component/social';
require('./home.scss');

export const HomeComponent = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="container" id="home">
        <div className="row">
          <button className="salto col-12">
            <i className="fa fa-file-text-o fa-5x" aria-hidden="true" />
            <span>orden de reparacion</span>
          </button>
          <button className="salto col-12">
            <i className="fa fa-car fa-5x" aria-hidden="true" />
            <span className="">vehiculos</span>
          </button>
          <button className="salto col-12">
            <i className="fa fa-users fa-5x" aria-hidden="true" />
            <span>clientes</span>
          </button>
          <button className="salto col-12">
            <i className="fa fa-credit-card fa-5x" aria-hidden="true" />
            <span>facturas</span>
          </button>
        </div>
      </div>
      <Social></Social>
    </div>
  );
};
