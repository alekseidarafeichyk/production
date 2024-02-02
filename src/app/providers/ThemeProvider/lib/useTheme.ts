import { useContext, useEffect } from 'react'

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

interface UseThemeResult {
	toggleTheme: () => void
	theme: Theme
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext)
    const documentBody = document.body

    useEffect(() => {
        if (!documentBody.className) {
            documentBody.className = theme || Theme.LIGHT
        }
    }, [theme, documentBody])

    const toggleTheme = (): void => {
        let newTheme: Theme
        switch (theme) {
        case Theme.DARK: {
            newTheme = Theme.LIGHT
            break
        }
        case Theme.LIGHT: {
            newTheme = Theme.DARK
            break
        }
        default: newTheme = Theme.LIGHT
        }
        document.body.className = newTheme
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
        if (setTheme) {
            setTheme(newTheme)
        }
    }

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    }
}
