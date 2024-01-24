import { createSlice } from '@reduxjs/toolkit'

import { type ProfileSchema } from '../types/profile'

const initialState: ProfileSchema = {
    data: undefined,
    isLoading: false,
    error: ''
}

export const profileSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
