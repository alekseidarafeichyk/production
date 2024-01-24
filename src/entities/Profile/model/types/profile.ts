import { type Countries, type Currencies } from 'shared/constants/common'

export interface Profile {
    first: string
    lastname: string
    age: number
    currency: Currencies
    country: Countries
    city: string
    username: string
    avatar: string
}

export interface ProfileSchema {
    data?: Profile
    isLoading: boolean
    error: string
}
