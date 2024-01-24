import axios from 'axios'
import { type User } from 'entities/User/model/types/user'
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localstorage'

import { createAsyncThunk } from '@reduxjs/toolkit'

import { userActions } from '../../../../entities/User/index'

interface AuthByUserNameThunk {
    username: string
    password: string
}

export const authByUserNameThunk = createAsyncThunk<User, AuthByUserNameThunk, { rejectValue: string }>(
    'auth/authByUserName',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8001/login', authData)

            if (!response.data) {
                throw new Error()
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(userActions.setUserData(response.data))

            return response.data
        } catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue('error')
        }
    },
)
