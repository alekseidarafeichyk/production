import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { RouterDecorator } from 'shared/config/storyboook/decorators/RouterDecorator'
import { StyleDecorator } from 'shared/config/storyboook/decorators/StyleDecorator'
import { ThemeDecorator } from 'shared/config/storyboook/decorators/ThemeDecorator'

import type { Preview } from '@storybook/react'

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator]
}

export default preview
