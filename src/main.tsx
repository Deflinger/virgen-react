import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ModalProvider } from './components/Modal/context/ModalContext.tsx'
import ErrorBoundary from './ErrorBoundary.tsx'
import { initAxios } from './services/axios.service.ts'

initAxios();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ModalProvider>
        <App />
      </ModalProvider>
    </ErrorBoundary>
  </React.StrictMode>,
)
