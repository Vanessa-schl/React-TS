import React from 'react' //importar a biblioteca do react
import ReactDOM from 'react-dom/client' //
import App from './App'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode> 
    {/* precisa disso para renderizar */}
    <App />
  </React.StrictMode>,
)
