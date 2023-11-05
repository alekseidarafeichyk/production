import type { StoryFn } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storyboook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeSwitcher } from './ThemeSwitcher'

export default {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher,
}

const Template: StoryFn<typeof ThemeSwitcher> = (args) => (<ThemeSwitcher {...args}/>)

export const Light = Template.bind({})
Light.args = {
}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
