import { type FC } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import cls from './AppLink.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

export enum AppLinkTheme {
	PRIMARY = 'primary',
	INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
	className?: string
	theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = ({
    children,
    to,
    className,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
}) => {
    return (
        <Link
            className={classNames(cls.appLink, {}, [cls[theme], className])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    )
}
