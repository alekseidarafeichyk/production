import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storyboook/decorators/ThemeDecorator'

import type { StoryFn } from '@storybook/react'

import { Sidebar } from './Sidebar'

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
}

const Template: StoryFn<typeof Sidebar> = (args) => (<Sidebar {...args}/>)

export const Light = Template.bind({})
Light.args = {
}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
