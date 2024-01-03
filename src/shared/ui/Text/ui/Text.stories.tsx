import { Theme } from 'app/providers/ThemeProvider'

import type { StoryFn } from '@storybook/react'

import { ThemeDecorator } from '../../../config/storyboook/decorators/ThemeDecorator'

import { Text } from './Text'

export default {
    title: 'shared/Text',
    component: Text,

}

const Template: StoryFn<typeof Text> = (args) => (<Text {...args}/>)

export const Primary = Template.bind({})

Primary.args = {
    title: 'Your title',
    description: 'your custom text'
}

export const OnlyTitle = Template.bind({})

OnlyTitle.args = {
    title: 'Your title',
}

export const OnlyDescription = Template.bind({})

OnlyDescription.args = {
    description: 'Your description',
}

export const PrimaryDark = Template.bind({})

PrimaryDark.args = {
    title: 'Your title',
    description: 'your custom text'
}

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTitleDark = Template.bind({})
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

OnlyTitleDark.args = {
    title: 'Your title',
}

export const OnlyDescriptionDark = Template.bind({})
OnlyDescriptionDark.decorators = [ThemeDecorator(Theme.DARK)]

OnlyDescriptionDark.args = {
    description: 'Your description',
}

export const ErrorText = Template.bind({})
