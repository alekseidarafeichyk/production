import { type StateSchema } from 'app/providers/StoreProvider'
import { Countries, Currencies } from 'shared/constants/common'

import { type Profile } from '../../types/profile'

import { getProfileData } from './getProfileData'

describe('getProfileData', () => {
    test('should return state', () => {
        const profileFields: Profile = {
            first: 'Alex',
            lastname: 'Dorofeichik',
            age: 29,
            currency: Currencies.USD,
            country: Countries.BELARUS,
            city: 'Minsk',
            username: 'admin',
            avatar: ''
        }
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: profileFields
            }
        }
        expect(getProfileData(state as StateSchema)).toBe(profileFields)
    })
})
