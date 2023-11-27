import { type CounterSchema } from 'entities/Counter'
import { type UserSchema } from 'entities/User'

export interface StateSchema {
    user: UserSchema
    counter: CounterSchema
}
