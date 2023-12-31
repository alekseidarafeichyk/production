import { type ReactNode } from 'react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18nForTests from 'shared/config/i18n/i18nForTests'

import { type DeepPartial } from '@reduxjs/toolkit'
import { render, type RenderResult } from '@testing-library/react'

export interface renderComponentOptions {
    route?: string
    initialState?: DeepPartial<StateSchema>
}

export function renderComponent (component: ReactNode, options: renderComponentOptions = {}): RenderResult {
    const {
        route = '/',
        initialState,
    } = options

    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    )
}
