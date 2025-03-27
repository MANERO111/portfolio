import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './portfeuil'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
