import { memo, useMemo, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { SidebarItems } from 'widgets/Sidebar/model/item'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'

import { SidebarItem } from '../SidebarItem/SidebarItem'

import cls from './Sidebar.module.scss'

interface SidebarProps {
	className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = (): void => {
        setCollapsed((prev) => !prev)
    }

    const items = useMemo(() => {
        return SidebarItems.map(item => <SidebarItem item={item} collapsed={collapsed} key={item.text}/>)
    }, [collapsed])

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
                {items}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    )
})
