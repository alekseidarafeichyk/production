import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localstorage'

import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { type User, type UserSchema } from '../types/user'

const initialState: UserSchema = {
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<User>) => {
            state.userData = action.payload
        },
        initAuthUser: (state) => {
            const userData = localStorage.getItem(USER_LOCALSTORAGE_KEY)
            if (userData) {
                state.userData = JSON.parse(userData)
            }
        },
        logout: (state) => {
            localStorage.removeItem(USER_LOCALSTORAGE_KEY)
            state.userData = undefined
        }
    },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
