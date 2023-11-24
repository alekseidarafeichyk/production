import { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ButtonTheme {
	CLEAR = 'clear',
    CLEAR_INVERTED = 'clear-inverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'background-inverted'
}

export enum ButtonSize {
    M = 'size-m',
    L = 'size-l',
    XL = 'size-xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	theme?: ButtonTheme
    size?: ButtonSize
}

export const Button: FC<ButtonProps> = ({
    children,
    className,
    theme = ButtonTheme.CLEAR,
    size = ButtonSize.M,
    ...otherProps
}) => {
    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls[size]]: true,
    }

    return (
        <button
            className={classNames(cls.button, mods, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
