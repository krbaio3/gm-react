import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HelloComponent } from './app/hello';

ReactDOM.render(
  <HelloComponent userName="Tomas"/>,
  document.getElementById('root')
);