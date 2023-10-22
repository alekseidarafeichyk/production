import { type FC, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter: FC = () => {
    const { t } = useTranslation()

    return (
        <div className="page-wrapper">
            <Suspense fallback={<div>{t('Загрузка')}</div>}>
                <Routes>
                    {Object.values(routeConfig).map(({ path, element }) => {
                        return <Route key={path} path={path} element={element} />
                    })}
                </Routes>
            </Suspense>
        </div>
    )
}

export default AppRouter
