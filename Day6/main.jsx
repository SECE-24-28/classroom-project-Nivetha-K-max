import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Display from './Display.jsx'
import Display1 from './Display1.jsx'
import Display2 from './Display2.jsx'
import Display4 from './Display4.jsx'
import Display5 from './Display5.jsx'
import Display6 from './Display6.jsx'
import Display7 from './Display7.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Display7 />
    {/* <App /> */}
  </StrictMode>,
)
