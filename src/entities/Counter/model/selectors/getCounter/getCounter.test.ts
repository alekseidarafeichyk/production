import { type StateSchema } from 'app/providers/StoreProvider'

import { type DeepPartial } from '@reduxjs/toolkit'

import { getCounter } from './getCounter'

describe('getCounter', () => {
    test('should return counter', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 2
            }
        }
        expect(getCounter(state as StateSchema)).toEqual({ value: 2 })
    })
})
