import { useState, type FC } from 'react'
import cls from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal'
import { Button } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'
import { ButtonTheme } from 'shared/ui/Button/ui/Button'

interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const [isOpen, setIsOpen] = useState(false)
    const { t } = useTranslation()

    const onToggle = (): void => {
        setIsOpen(prev => !prev)
    }
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button onClick={onToggle} theme={ButtonTheme.BACKGROUND}>
                {t('Войти')}
            </Button>
            <Modal onClose={onToggle} isOpen={isOpen}>23</Modal>
        </div>
    )
}
