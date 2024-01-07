import { type StateSchema } from 'app/providers/StoreProvider'

import { type DeepPartial } from '@reduxjs/toolkit'

import { getAuthError } from './getAuthError'

describe('getAuthError', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            auth: {
                error: 'error'
            }
        }
        expect(getAuthError(state as StateSchema)).toBe('error')
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = { }
        expect(getAuthError(state as StateSchema)).toBe('')
    })
})
