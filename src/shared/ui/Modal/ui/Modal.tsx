import { type FC, type ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Portal } from 'shared/ui/Portal'

import cls from './Modal.module.scss'

const ANIMATION_DELAY = 300

interface ModalProps {
    isOpen: boolean
    children: ReactNode
    className?: string
    onClose?: () => void
    lazy?: boolean
}

export const Modal: FC<ModalProps> = (
    {
        isOpen,
        className,
        children,
        onClose,
        lazy = true
    }
) => {
    const [isMounted, setIsMounted] = useState(false)
    const [isClosing, setIsClosing] = useState(false)
    const timerRef = useRef<ReturnType<typeof setTimeout>>(null)

    useEffect(() => {
        if (isOpen && lazy) {
            setIsMounted(true)
        }
    }, [isOpen])

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

    if (!isMounted) {
        return null
    }

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
