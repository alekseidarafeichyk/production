import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { authByUserNameThunk } from '../services/authByUserName'
import { type AuthSchema } from '../types/authSchema'

const initialState: AuthSchema = {
    username: '',
    password: '',
    isLoading: false
}

export const counterSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        }
    },
    extraReducers (builder) {
        builder.addCase(authByUserNameThunk.pending, (state) => {
            state.error = undefined
            state.isLoading = true
        })
            .addCase(authByUserNameThunk.fulfilled, (state) => {
                state.isLoading = false
            })
            .addCase(authByUserNameThunk.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: authActions } = counterSlice
export const { reducer: authReducer } = counterSlice
