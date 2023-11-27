import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storyboook/decorators/ThemeDecorator'

import type { StoryFn } from '@storybook/react'

import { Modal } from './Modal'

export default {
    title: 'shared/Modal',
    component: Modal,

}

const Template: StoryFn<typeof Modal> = (args) => (<Modal {...args}/>)

export const Primary = Template.bind({})

Primary.args = {
    children: 'Text',
    isOpen: true
}

export const Dark = Template.bind({})

Dark.args = {
    children: 'Text',
    isOpen: true
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]

// export const OutlineDark = Template.bind({})
// OutlineDark.args = {
//     children: 'Text',
//     theme: ButtonTheme.OUTLINE,
//     size: ButtonSize.L
// }
// OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
