import axios from 'axios'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk'

import { userActions } from './../../../../entities/User'
import { authByUserNameThunk } from './authByUserName'

jest.mock('axios')

const mockedAxios = jest.mocked(axios)

describe('authByUserName', () => {
    test('success auth', async () => {
        const userValue = { username: '123', id: '1' }

        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))
        const thunk = new TestAsyncThunk(authByUserNameThunk)
        const result = await thunk.callThunk({ username: '123', password: '123' })
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setUserData(userValue))
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toBe(userValue)
    })

    test('error auth', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: '403' }))
        const thunk = new TestAsyncThunk(authByUserNameThunk)
        const result = await thunk.callThunk({ username: '123', password: '123' })
        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('error')
    })
})
