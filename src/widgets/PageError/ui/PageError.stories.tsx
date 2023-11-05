import type { StoryFn } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storyboook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { PageError } from './PageError'

export default {
    title: 'widgets/PageError',
    component: PageError,
}

const Template: StoryFn<typeof PageError> = (args) => (<PageError {...args}/>)

export const Light = Template.bind({})
Light.args = {
}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
