import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MainApp from './container/MainApp';
import { GoogleAuthProvider } from './hook/GoogleAuthProvider';
ReactDOM.render(
  <GoogleAuthProvider>
    <React.StrictMode>
      <MainApp />
    </React.StrictMode>
  </GoogleAuthProvider>,
  document.getElementById('root')
);
reportWebVitals();
