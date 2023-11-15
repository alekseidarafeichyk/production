import { Theme } from 'app/providers/ThemeProvider';
import MainPage from './MainPage';
import { ThemeDecorator } from 'shared/config/storyboook/decorators/ThemeDecorator';
import { Meta, StoryFn } from '@storybook/react';

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof MainPage>;

const Template: StoryFn<typeof MainPage> = (args) => <MainPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];