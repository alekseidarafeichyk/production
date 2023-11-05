import type { Preview } from '@storybook/react'
import { StyleDecorator } from 'shared/config/storyboook/decorators/StyleDecorator'
import { ThemeDecorator } from 'shared/config/storyboook/decorators/ThemeDecorator'
import { RouterDecorator } from 'shared/config/storyboook/RouterDecorator'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'

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
