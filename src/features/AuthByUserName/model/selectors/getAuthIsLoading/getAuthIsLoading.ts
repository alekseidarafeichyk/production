import { type StateSchema } from 'app/providers/StoreProvider'

export const getAuthIsLoading = (state: StateSchema): boolean => state?.auth?.isLoading || false
