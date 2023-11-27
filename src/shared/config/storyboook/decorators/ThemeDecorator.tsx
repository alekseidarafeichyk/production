import { type Theme, ThemeProvider } from 'app/providers/ThemeProvider'

import { type StoryFn } from '@storybook/react'

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => {
    return (
        <ThemeProvider>
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    )
}
