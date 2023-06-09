import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './fonts/FontsFree-Net-SFProText-Regular.ttf';
import { Provider } from 'react-redux';
import { store } from "./store"
import { SplashScreen } from './components/SplashScreen';

ReactDOM.render(
  <React.StrictMode>
    <SplashScreen>
      <Provider store={store}>
        <App />
      </Provider>
    </SplashScreen>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
