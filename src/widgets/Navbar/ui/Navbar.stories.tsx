import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storyboook/decorators/ThemeDecorator'

import type { StoryFn } from '@storybook/react'

import { Navbar } from './Navbar'

export default {
    title: 'widgets/Navbar',
    component: Navbar,
}

const Template: StoryFn<typeof Navbar> = (args) => (<Navbar {...args}/>)

export const Light = Template.bind({})
Light.args = {
}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
