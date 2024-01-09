import { type StateSchema } from 'app/providers/StoreProvider'

import { type DeepPartial } from '@reduxjs/toolkit'

import { getAuthPassword } from './getAuthPassword'

describe('getAuthPassword', () => {
    test('should return password', () => {
        const state: DeepPartial<StateSchema> = {
            auth: {
                password: '1231'
            }
        }
        expect(getAuthPassword(state as StateSchema)).toBe('1231')
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = { }
        expect(getAuthPassword(state as StateSchema)).toBe('')
    })
})
