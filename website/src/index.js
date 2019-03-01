import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import globalTheme from './assets/themes/global'
import * as serviceWorker from './serviceWorker';
import mountPoint from './utils/mountingPoints'

globalTheme();
ReactDOM.render(<App />, mountPoint);

serviceWorker.unregister();
