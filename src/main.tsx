/**
 *  - main.tsx
 * ----------------------------
 * Purpose: Application entry point
 *
 * Why: This is where React mounts to the DOM
 *
 * What it does:
 * - Creates the React root
 * - Renders the App component inside BrowserRouter
 * - Wraps in StrictMode for development warnings
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import '/src/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
)
