// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client' 
// import './index.css'
// import App from './App.js'
// react app below
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);