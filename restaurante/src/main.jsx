/* import = quando quer usar um componente de outro arquivo, ou seja, importa-lo */
import React from 'react'
import ReactDOM from 'react-dom/client'
/*importando a função App do arquivo App.jsx */
import {App} from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)