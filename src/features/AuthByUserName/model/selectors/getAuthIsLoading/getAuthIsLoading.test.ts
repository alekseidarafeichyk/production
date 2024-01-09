import { type StateSchema } from 'app/providers/StoreProvider'

import { type DeepPartial } from '@reduxjs/toolkit'

import { getAuthIsLoading } from './getAuthIsLoading'

describe('getAuthIsLoading', () => {
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            auth: {
                isLoading: true
            }
        }
        expect(getAuthIsLoading(state as StateSchema)).toBe(true)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = { }
        expect(getAuthIsLoading(state as StateSchema)).toBe(false)
    })
})
