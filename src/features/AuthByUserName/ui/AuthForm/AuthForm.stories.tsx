import { StoreDecorator } from 'shared/config/storyboook/decorators/StoreDecorator'

import { type StoryFn } from '@storybook/react'

import AuthForm from './AuthForm'

export default {
    title: 'features/AuthForm',
    component: AuthForm,
}

const Template: StoryFn<typeof AuthForm> = (args) => <AuthForm {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [StoreDecorator({
    auth: { username: '123', password: 'asd' },
})]

export const withError = Template.bind({})
withError.args = {}
withError.decorators = [StoreDecorator({
    auth: { username: '123', password: 'asd', error: 'ERROR' },
})]

export const Loading = Template.bind({})
Loading.args = {}
Loading.decorators = [StoreDecorator({
    auth: { isLoading: true },
})]
