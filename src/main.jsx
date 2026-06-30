import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Import the React version of Vercel Analytics
import { Analytics } from '@vercel/analytics/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* Injects the analytics tracking script safely without rendering any visual elements */}
    <Analytics />
  </StrictMode>,
)
