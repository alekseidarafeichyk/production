import { type FC, type ReactNode } from 'react'
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { createReduxStore } from 'app/providers/StoreProvider/config/store'
import { Provider } from 'react-redux'

import { type DeepPartial } from '@reduxjs/toolkit'

interface StoreProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<StateSchema>
}

export const StoreProvider: FC<StoreProviderProps> = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
    } = props

    const store = createReduxStore(initialState as StateSchema)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
