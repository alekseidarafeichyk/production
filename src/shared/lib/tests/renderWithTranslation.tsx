import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18nForTests from 'shared/config/i18n/i18nForTests'

import { render, type RenderResult } from '@testing-library/react'

export function renderWithTranslation (component: ReactNode): RenderResult {
    return render(
        <I18nextProvider i18n={i18nForTests}>
            {component}
        </I18nextProvider>,
    )
}
