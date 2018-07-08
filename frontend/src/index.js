import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { ThemeProvider } from 'styled-components';
import { appTheme } from './app/utils/appTheme';
import registerServiceWorker from './registerServiceWorker';
import './app/utils/globalStyles';

ReactDOM.render(
  <ThemeProvider theme={appTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

registerServiceWorker();
