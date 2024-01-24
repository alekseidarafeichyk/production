import { type AnyAction, configureStore, type ReducersMapObject, type ThunkMiddleware } from '@reduxjs/toolkit'
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'

import { userReducer } from '../../../../entities/User'

import { createReducerManager } from './reducerManager'
import { type StateSchema } from './StateSchema'

type CreateReduxStore = ToolkitStore<StateSchema, AnyAction, [ThunkMiddleware<StateSchema, AnyAction>]>

export function createReduxStore (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>
): CreateReduxStore {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
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

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
