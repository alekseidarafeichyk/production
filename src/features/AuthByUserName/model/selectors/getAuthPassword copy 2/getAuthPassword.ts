import { type StateSchema } from 'app/providers/StoreProvider'

export const getAuthPassword = (state: StateSchema): string => state?.auth?.password || ''
