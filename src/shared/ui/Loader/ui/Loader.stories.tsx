import type { StoryFn } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storyboook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Loader } from './Loader'

export default {
    title: 'shared/Loader',
    component: Loader,
}

const Template: StoryFn<typeof Loader> = (args) => (<Loader {...args}/>)

export const Normal = Template.bind({})
Normal.args = {
}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
