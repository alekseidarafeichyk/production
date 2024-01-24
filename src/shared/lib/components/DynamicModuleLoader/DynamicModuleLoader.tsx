import { type FC, type ReactNode, useEffect } from 'react'
import { type ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { type StateSchemaKeys } from 'app/providers/StoreProvider/config/StateSchema'
import { useStore } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

import { type Reducer } from '@reduxjs/toolkit'

export type ReducersList = {
    [key in StateSchemaKeys]?: Reducer
}

type ReducersListEntry = [StateSchemaKeys, Reducer]

interface DynamicModuleLoaderProps {
    children: ReactNode
    reducers: ReducersList
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (
    {
        children,
        reducers,
        removeAfterUnmount = true
    }
) => {
    const dispatch = useAppDispatch()
    const store = useStore() as ReduxStoreWithManager

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
            store.reducerManager.add(name, reducer)
            dispatch({ type: `@Init ${name} reducer` })
        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
                    dispatch({ type: `@Remove ${name} reducer` })
                    store.reducerManager.remove(name)
                })
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (<>{children}</>)
}
