import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Link } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/Store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
  <App/>
  </Provider>
 
);


reportWebVitals();
