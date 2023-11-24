import { type FC, useState } from 'react'
import cls from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink'

interface SidebarProps {
	className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false)

    const { t } = useTranslation()

    const onToggle = (): void => {
        setCollapsed((prev) => !prev)
    }

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
                className
            ])}
        >
            <button
                data-testid="sidebar-toggle"
                className={cls['collapse-btn']}
                onClick={onToggle}>
                {collapsed ? '>' : '<'}
            </button>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.INVERTED}
                    to={'/'}
                >
                    {t('Главная')}
                </AppLink>
                <AppLink to={'/about'}>{t('О нас')}</AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    )
}
