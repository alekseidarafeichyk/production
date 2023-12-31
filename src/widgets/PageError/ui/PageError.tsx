import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'

import cls from './PageError.module.scss'

interface PageErrorProps {
    className?: string
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation('pageError')

    return (
        <div className={classNames(cls['page-error'], {}, [className])}>{t('Произошла непредвиденная ошибка')}</div>
    )
}
