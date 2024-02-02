import { type StateSchema } from 'app/providers/StoreProvider'

import { getAuthUserName } from './getAuthUserName'

describe('getAuthUserName', () => {
    test('should return userName', () => {
        const state: DeepPartial<StateSchema> = {
            auth: {
                username: 'admin'
            }
        }
        expect(getAuthUserName(state as StateSchema)).toBe('admin')
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = { }
        expect(getAuthUserName(state as StateSchema)).toBe('')
    })
})
