import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { Suspense, type FC } from 'react'
import { Sidebar } from 'widgets/Sidebar'

export const App: FC = () => {
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
