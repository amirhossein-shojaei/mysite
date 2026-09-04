import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { registerSW } from 'virtual:pwa-register'
import { AppRoutes } from './routes/index.route'
import './styles/globals.css'
import { LanguageProvider } from './locales'

registerSW({ immediate: true })
createRoot(document.getElementById('root')!).render(<StrictMode><LanguageProvider><BrowserRouter basename="/mysite"><AppRoutes /></BrowserRouter></LanguageProvider></StrictMode>)
