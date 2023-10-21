import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'

export const LanguageSwitcher: FC = () => {
    const { t, i18n } = useTranslation()

    const changeLanguage = (): void => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
    }

    return <Button onClick={changeLanguage}>{t('Язык')}</Button>
}
