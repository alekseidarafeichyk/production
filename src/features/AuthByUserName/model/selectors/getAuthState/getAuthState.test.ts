import { type StateSchema } from 'app/providers/StoreProvider'

import { type DeepPartial } from '@reduxjs/toolkit'

import { getAuthState } from './getAuthState'

describe('getAuthState', () => {
    test('should return state', () => {
        const authFields = {
            username: 'admin',
            password: '1231',
            error: '',
            isLoading: false
        }
        const state: DeepPartial<StateSchema> = {
            auth: authFields
        }
        expect(getAuthState(state as StateSchema)).toBe(authFields)
    })
})
