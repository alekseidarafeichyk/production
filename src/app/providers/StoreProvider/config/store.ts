import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'

import { counterReducer } from '../../../../entities/Counter'
import { userReducer } from '../../../../entities/User'

import { type StateSchema } from './StateSchema'

export function createReduxStore (initialState?: StateSchema): any {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer
    }

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS__DEV__,
        preloadedState: initialState,
    })
}
