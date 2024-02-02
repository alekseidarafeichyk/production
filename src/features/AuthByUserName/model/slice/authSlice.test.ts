import { type AuthSchema } from '../types/authSchema'

import { authActions, authReducer } from './authSlice'

describe('test auth slice', () => {
    test('test set userName', () => {
        const state: DeepPartial<AuthSchema> = { username: '' }
        expect(authReducer(
            state as AuthSchema,
            authActions.setUsername('admin')))
            .toStrictEqual({ username: 'admin' })
    })

    test('test set password', () => {
        const state: DeepPartial<AuthSchema> = { password: '' }
        expect(authReducer(
            state as AuthSchema,
            authActions.setPassword('123')))
            .toStrictEqual({ password: '123' })
    })
})
