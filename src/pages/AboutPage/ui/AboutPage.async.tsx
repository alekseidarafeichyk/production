// import { lazy } from 'react'

import { lazy } from 'react'

// For production
// export const AboutPageAsync = lazy(async () => await import('./AboutPage'))

// For tests
export const AboutPageAsync = lazy(async () => await new Promise((resolve) => {
    // @ts-expect-error
    setTimeout(() => { resolve(import('./AboutPage')) }, 1500)
}))
