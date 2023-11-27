import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storyboook/decorators/ThemeDecorator'

import type { StoryFn } from '@storybook/react'

import { AppLink, AppLinkTheme } from './AppLink'

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
}

const Template: StoryFn<typeof AppLink> = (args) => (<AppLink {...args}/>)

export const Primary = Template.bind({})
Primary.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY
}

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Inverted = Template.bind({})
Inverted.args = {
    children: 'Text',
    theme: AppLinkTheme.INVERTED
}

export const InvertedDark = Template.bind({})
InvertedDark.args = {
    children: 'Text',
    theme: AppLinkTheme.INVERTED
}

InvertedDark.decorators = [ThemeDecorator(Theme.DARK)]
