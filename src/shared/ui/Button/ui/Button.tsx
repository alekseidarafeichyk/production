import { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ButtonTheme {
	CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = ({
    children,
    className,
    theme = ButtonTheme.CLEAR,
    ...otherProps
}) => {
    return (
        <button
            className={classNames(cls.button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
