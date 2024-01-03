import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Text.module.scss'

export enum TextTheme {
 PRIMARY = 'primary',
 ERROR = 'error'
}

interface TextProps {
    className?: string
    title?: string
    description?: string
    theme?: TextTheme
}

export const Text: FC<TextProps> = ({
    className,
    title,
    description,
    theme = TextTheme.PRIMARY
}) => {
    return (
        <div className={classNames(cls.wrapper, { [cls[theme]]: true }, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {description && <p className={cls.description}>{description}</p>}
        </div>
    )
}
