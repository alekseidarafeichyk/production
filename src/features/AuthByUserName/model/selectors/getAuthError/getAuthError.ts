import { type StateSchema } from 'app/providers/StoreProvider'

export const getAuthError = (state: StateSchema): string => state?.auth?.error || ''
