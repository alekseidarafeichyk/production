import { type FC, Suspense, useEffect } from 'react'
import { userActions } from 'entities/User'
import { useDispatch } from 'react-redux'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

import { AppRouter } from './providers/router'

export const App: FC = () => {
    const dispatch = useDispatch<any>()

    useEffect(() => {
        dispatch(userActions.initAuthUser())
    }, [dispatch])

    return (
        <div className='app'>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}
