import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { authReducer } from 'features/AuthByUserName/index'

import { type ReducersMapObject } from '@reduxjs/toolkit'
import { type StoryFn } from '@storybook/react'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    auth: authReducer
}

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
) => (StoryComponent: StoryFn) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
)
