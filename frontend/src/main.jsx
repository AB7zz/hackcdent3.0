import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {StateContextProvider} from './context/StateContext.jsx'
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThirdwebProvider activeChain={ChainId.Mumbai}>
      <StateContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StateContextProvider>
    </ThirdwebProvider>
  </React.StrictMode>,
)
