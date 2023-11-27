import { type FC, useState } from 'react'
import { AuthModal } from 'features/AuthByUserName'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/ui/Button'

import cls from './Navbar.module.scss'

interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const [isAuthModal, setIsAuthModal] = useState(false)
    const { t } = useTranslation()

    const onToggle = (): void => {
        setIsAuthModal(prev => !prev)
    }
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                onClick={onToggle}
                theme={ButtonTheme.BACKGROUND}
            >
                {t('Войти')}
            </Button>
            <AuthModal onClose={onToggle} isOpen={isAuthModal} />
        </div>
    )
}
