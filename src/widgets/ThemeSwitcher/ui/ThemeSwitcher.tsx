import { type FC } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import DarkModeIcon from 'shared/assets/icons/dark-mode.svg'
import LightModeIcon from 'shared/assets/icons/light-mode.svg'
import { Button } from 'shared/ui/Button'

import cls from './ThemeSwitcher.module.scss'

export const ThemeSwitcher: FC = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button onClick={toggleTheme}>
            {theme === Theme.DARK
? (
				<LightModeIcon className={cls['switch-icon']} />
			)
: (
				<DarkModeIcon className={cls['switch-icon']} />
			)}
        </Button>
    )
}
