import React from 'react'
import { App } from 'app/App'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { StoreProvider } from 'app/providers/StoreProvider'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './app/styles/index.scss'

import './shared/config/i18n/i18n'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <StoreProvider>
                <ErrorBoundary>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </ErrorBoundary>
            </StoreProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
