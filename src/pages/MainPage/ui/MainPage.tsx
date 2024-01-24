import { type FC, memo } from 'react'
import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton'
import { useTranslation } from 'react-i18next'

const MainPage: FC = memo(() => {
    const { t } = useTranslation('main')

    return (
        <>
            <BugButton />
            <div>{t('Главная страница')}</div>
        </>
    )
})

export default MainPage
