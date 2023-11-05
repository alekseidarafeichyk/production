import { type Decorator, type StoryFn } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// eslint-disable-next-line react/display-name
export const RouterDecorator: Decorator = (StoryComponent: StoryFn) => {
    return (
        <BrowserRouter>
            <StoryComponent />
        </BrowserRouter>
    )
}
