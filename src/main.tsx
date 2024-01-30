import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/application.tsx'
import { appStarted } from '@shared/config/init.ts'

appStarted();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
