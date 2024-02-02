import { type ReactNode } from 'react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18nForTests from 'shared/config/i18n/i18nForTests'

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
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    )
}
