import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { initAxios } from './services/axios.service.ts'
import AppHookContainer from './AppHookContainer.tsx'

initAxios();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <AppHookContainer />
  </React.StrictMode>,
)
