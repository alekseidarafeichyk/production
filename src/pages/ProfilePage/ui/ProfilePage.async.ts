import { lazy } from 'react'

// For production
// export const ProfilePageAsync = lazy(async () => await import('./ProfilePage'))

// For tests
export const ProfilePageAsync = lazy(async () => await new Promise((resolve) => {
    // @ts-expect-error
    setTimeout(() => { resolve(import('./ProfilePage')) }, 1500)
}))
