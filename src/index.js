import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*  basename="/goit-react-hw-05-movies-2023" */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
