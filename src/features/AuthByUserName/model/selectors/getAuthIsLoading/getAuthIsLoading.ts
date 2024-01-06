import { type StateSchema } from 'app/providers/StoreProvider'

export const getLoginIsLoading = (state: StateSchema): boolean => state?.auth?.isLoading || false
