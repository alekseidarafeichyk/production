import { type FC, useState } from 'react'
import cls from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'

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
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
                className
            ])}
        >
            <button onClick={onToggle}>{t('Переключить')}</button>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    )
}
