import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'

import { userReducer } from '../../../../entities/User'

import { createReducerManager } from './reducerManager'
import { type StateSchema } from './StateSchema'

export function createReduxStore (initialState?: StateSchema): any {
    const rootReducer: ReducersMapObject<StateSchema> = {
        user: userReducer,
    }

    const reducerManager = createReducerManager(rootReducer)

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS__DEV__,
        preloadedState: initialState,
    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    store.reducerManager = reducerManager

    return store
}
