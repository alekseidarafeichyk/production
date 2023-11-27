import { type FC } from 'react'
import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton'
import { Counter } from 'entities/Counter'
import { useTranslation } from 'react-i18next'

const MainPage: FC = () => {
    const { t } = useTranslation('main')

    return (
        <>
            <BugButton />
            <div>{t('Главная страница')}</div>
            <Counter />
        </>
    )
}

export default MainPage
