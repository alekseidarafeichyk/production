import { type CounterSchema } from 'entities/Counter'
import { type UserSchema } from 'entities/User'
import { type AuthSchema } from 'features/AuthByUserName'

export interface StateSchema {
    user: UserSchema
    counter: CounterSchema
    auth: AuthSchema
}
