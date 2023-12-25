import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import axios from 'axios';
import './index.css'
import { BrowserRouter } from "react-router-dom";



// axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.baseURL = 'https://airbnb-backend-aya7.onrender.com';
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
