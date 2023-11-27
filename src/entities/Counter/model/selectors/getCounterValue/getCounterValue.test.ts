import { type StateSchema } from 'app/providers/StoreProvider'

import { type DeepPartial } from '@reduxjs/toolkit'

import { getCounterValue } from './getCounterValue'

describe('getCounter', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 2
            }
        }
        expect(getCounterValue(state as StateSchema)).toEqual(2)
    })
})
