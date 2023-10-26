import { type FC } from 'react'
import cls from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    className={cls['main-link']}
                    theme={AppLinkTheme.INVERTED}
                    to={'/'}
                >
                    {t('Главная')}
                </AppLink>
                <AppLink to={'/about'}>{t('О нас')}</AppLink>
            </div>
        </div>
    )
}
