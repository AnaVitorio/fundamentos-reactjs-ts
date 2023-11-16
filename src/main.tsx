import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'

// simbolo ! -> estou garantindo para o typescript que o elemento vai existir
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
