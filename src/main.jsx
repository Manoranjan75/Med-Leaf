import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom';
import StoreContextProvider from './context/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
  <HashRouter> {/* Change this line */}
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </HashRouter>
);