import React from 'react'
import 'bulma/css/bulma.min.css'
import './style.css'
import App from './App'

import { createRoot } from 'react-dom/client'
const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
