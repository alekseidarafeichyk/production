import { type ReactNode, type FC, useRef, useState, useCallback, useEffect } from 'react'

import cls from './Modal.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Portal } from 'shared/ui/Portal'

const ANIMATION_DELAY = 300

interface ModalProps {
    isOpen: boolean
    children: ReactNode
    className?: string
    onClose?: () => void
}

export const Modal: FC<ModalProps> = ({ isOpen, className, children, onClose }) => {
    const [isClosing, setIsClosing] = useState(false)
    const timerRef = useRef<ReturnType<typeof setTimeout>>(null)

    const mods = {
        [cls.opened]: isOpen,
        [cls['is-closing']]: isClosing
    }

    const closeHandler = useCallback((): void => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])

    const onContentClick = (e: React.MouseEvent): void => {
        e.stopPropagation()
    }

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }

        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div
                        className={classNames(cls.content)}
                        onClick={onContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
