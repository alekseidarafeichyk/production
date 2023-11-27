import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal'

import { AuthForm } from '../AuthForm/AuthForm'

interface AuthModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

export const AuthModal: FC<AuthModalProps> = ({ className, isOpen, onClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            className={classNames('', {}, [className])}
        >
            <AuthForm />
        </Modal>
    )
}
