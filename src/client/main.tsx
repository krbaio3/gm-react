import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app/app';
import { HelloComponent } from './app/hello.component/hello';

require('./app/sass/main.scss');
// require('.app/shared/img/favicon.png');

ReactDOM.render(
  <App  />,
  document.getElementById('root'),
);  
