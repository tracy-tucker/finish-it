import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FirebaseContext } from './context/FirebaseContext'
import { firebase } from './firebase/config'
import { ProvideAuth } from './context/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{firebase}}>
      <ProvideAuth>
        <App />
      </ProvideAuth>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
