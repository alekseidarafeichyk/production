import { type AxiosInstance } from 'axios'
import { type ProfileSchema } from 'entities/Profile'
import { type UserSchema } from 'entities/User'
import { type AuthSchema } from 'features/AuthByUserName'
import { type NavigateFunction } from 'react-router-dom'

import { type AnyAction, type CombinedState, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'

export interface StateSchema {
    user: UserSchema
    auth?: AuthSchema
    profile?: ProfileSchema
}

export type StateSchemaKeys = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKeys, reducer: Reducer) => void
    remove: (key: StateSchemaKeys) => void
}

export interface ReduxStoreWithManager extends ToolkitStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance
    navigate?: NavigateFunction
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
}
