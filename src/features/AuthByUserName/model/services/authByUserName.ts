import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type User } from 'entities/User/model/types/user'
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localstorage'

import { createAsyncThunk } from '@reduxjs/toolkit'

import { userActions } from '../../../../entities/User/index'

interface AuthByUserNameThunk {
    username: string
    password: string
}

export const authByUserNameThunk = createAsyncThunk<User, AuthByUserNameThunk, ThunkConfig<string>>(
    'auth/authByUserName',
    async (authData, { dispatch, extra, rejectWithValue }) => {
        try {
            const response = await extra.api.post<User>('/login', authData)

            if (!response.data) {
                throw new Error()
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            dispatch(userActions.setUserData(response.data))

            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('error')
        }
    },
)
