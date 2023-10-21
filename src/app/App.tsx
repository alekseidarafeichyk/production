import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { type FC, Suspense } from 'react'
import './styles/index.scss'
import { useTranslation } from 'react-i18next'

export const App: FC = () => {
    const { theme } = useTheme()
    const { t } = useTranslation()

    return (
        <Suspense fallback={<div>{t('Загрузка')}</div>}>
            <div className={classNames('app', {}, [theme])}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </div>
        </Suspense>
    )
}
