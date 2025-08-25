import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Login } from './components/Login/Login.jsx'
import { NetflixIndex } from './components/netflix/netflix-index.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { FormDemo } from './form-demo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormDemo/>
  </StrictMode>,
)
