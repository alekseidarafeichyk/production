import { type StateSchema } from 'app/providers/StoreProvider'

import { type AuthSchema } from '../../types/authSchema'

export const getAuthState = (state: StateSchema): AuthSchema => state.auth
