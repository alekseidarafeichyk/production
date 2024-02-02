import { type NavigateFunction } from 'react-router-dom'
import { $api } from 'shared/api/api'

import { type AnyAction, type CombinedState, configureStore, type MiddlewareArray, type Reducer, type ReducersMapObject, type ThunkMiddleware } from '@reduxjs/toolkit'
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'

import { userReducer } from '../../../../entities/User'

import { createReducerManager } from './reducerManager'
import { type StateSchema, type ThunkExtraArg } from './StateSchema'

type CreateReduxStore = ToolkitStore<StateSchema, AnyAction, MiddlewareArray<[ThunkMiddleware<StateSchema, AnyAction, ThunkExtraArg>]>>

export function createReduxStore (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: NavigateFunction
): CreateReduxStore {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
    }

    const reducerManager = createReducerManager(rootReducer)

    const extraArg: ThunkExtraArg = {
        api: $api,
        navigate
    }

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS__DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg
            }
        })
    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
