import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { NavigationProvider } from './GlobalContext/useNavigationContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavigationProvider >
      <App />
    </NavigationProvider>
  </StrictMode>,
)
