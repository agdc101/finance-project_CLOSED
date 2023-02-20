import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './controllers/App';
import { registerReactControllerComponents } from '@symfony/ux-react';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
registerReactControllerComponents(require.context('/controllers', true, /\.(j|t)sx?$/));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();