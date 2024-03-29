import { memo, useCallback, useState } from 'react'
import { AuthModal } from 'features/AuthByUserName'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/ui/Button'

import { getUserAuthData, userActions } from '../../../entities/User'

import cls from './Navbar.module.scss'

interface NavbarProps {
	className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false)
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const authData = useSelector(getUserAuthData)

    const onToggleAuthModal = (): void => {
        setIsAuthModal(prev => !prev)
    }

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (!authData) {
        return (
            <div className={classNames(cls.navbar, {}, [className])}>
                <Button
                    onClick={onToggleAuthModal}
                    theme={ButtonTheme.BACKGROUND}
                >
                    {t('Войти')}
                </Button>
                {isAuthModal && <AuthModal onClose={onToggleAuthModal} isOpen={isAuthModal} />}
            </div>
        )
    }

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                onClick={onLogout}
                theme={ButtonTheme.BACKGROUND}
            >
                {t('Выйти')}
            </Button>
        </div>
    )
})
