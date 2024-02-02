import { type ThunkConfig } from 'app/providers/StoreProvider'

import { createAsyncThunk } from '@reduxjs/toolkit'

import { type Profile } from '../../types/profile'

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'auth/authByUserName',
    async (_, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<Profile>('/profile')

            console.log(response, 'sss')
            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('error')
        }
    },
)
