import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AboutProvider } from './context/AboutContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AboutProvider>
        <App />
      </AboutProvider>
    
    </BrowserRouter>
    
  </React.StrictMode>
);
