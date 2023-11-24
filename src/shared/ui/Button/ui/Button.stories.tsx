import type { StoryFn } from '@storybook/react'
import { Button, ButtonSize, ButtonTheme } from './Button'
import { ThemeDecorator } from '../../../config/storyboook/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/Button',
    component: Button,

}

const Template: StoryFn<typeof Button> = (args) => (<Button {...args}/>)

export const Primary = Template.bind({})

Primary.args = {
    children: 'Text'
}

export const Clear = Template.bind({})
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.M
}

export const Outline = Template.bind({})
Outline.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
