import { lazy } from 'react'

// For production
// export const MainPageAsync = lazy(async () => await import('./MainPage'))

// For tests
export const MainPageAsync = lazy(async () => await new Promise((resolve) => {
    // @ts-expect-error
    setTimeout(() => { resolve(import('./MainPage')) }, 1500)
}))
