import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from 'app/App'
import './shared/config/i18n/i18n'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { ThemeProvider } from 'app/providers/ThemeProvider'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
