import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './container/MainApp';
import { GoogleAuthProvider } from '@hooks/GoogleAuthProvider';
import './index.css';
ReactDOM.render(
  <GoogleAuthProvider>
    <React.StrictMode>
      <MainApp />
    </React.StrictMode>
  </GoogleAuthProvider>,
  document.getElementById('root')
);
