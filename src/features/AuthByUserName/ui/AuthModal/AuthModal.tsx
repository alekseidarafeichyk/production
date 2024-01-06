import { type FC, Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Loader } from 'shared/ui/Loader'
import { Modal } from 'shared/ui/Modal'
import { Text } from 'shared/ui/Text'

import { AuthFormAsync } from '../AuthForm/AuthForm.async'

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
            <Text title='Форма авторизации пользователя'/>
            <Suspense fallback={<Loader />}>
                <AuthFormAsync />
            </Suspense>
        </Modal>
    )
}
