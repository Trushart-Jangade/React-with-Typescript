import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import Hello from './App';
import Hello from './Hello';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Hello name="abch" color={'blue'} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
