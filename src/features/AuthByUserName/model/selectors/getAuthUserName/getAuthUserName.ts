import { type StateSchema } from 'app/providers/StoreProvider'

export const getAuthUserName = (state: StateSchema): string => state?.auth?.username || ''
