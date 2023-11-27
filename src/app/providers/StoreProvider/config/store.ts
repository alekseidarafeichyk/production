import { configureStore } from '@reduxjs/toolkit'

import { counterReducer } from '../../../../entities/Counter'

import { type StateSchema } from './StateSchema'

export function createReduxStore (initialState?: StateSchema): any {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer
        },
        devTools: __IS__DEV__,
        preloadedState: initialState,
    })
}
