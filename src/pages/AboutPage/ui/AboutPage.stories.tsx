import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storyboook/decorators/ThemeDecorator'

import { type StoryFn } from '@storybook/react'

import AboutPage from './AboutPage'

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}

const Template: StoryFn<typeof AboutPage> = (args) => <AboutPage {...args} />

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
