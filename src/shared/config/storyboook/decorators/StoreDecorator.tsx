import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'

import { type DeepPartial } from '@reduxjs/toolkit'
import { type StoryFn } from '@storybook/react'

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: StoryFn) => (
    <StoreProvider initialState={state}>
        <StoryComponent />
    </StoreProvider>
)
