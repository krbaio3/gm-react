import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app/app';
import { HelloComponent } from './app/hello.component/hello';
import 'jquery';
import 'bootstrap';

require('./app/sass/main.scss');
require('./app/assets/img/favicon.png');

ReactDOM.render(
  <App  />,
  document.getElementById('root'),
);  
