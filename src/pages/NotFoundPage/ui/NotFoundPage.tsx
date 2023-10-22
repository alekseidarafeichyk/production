import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './NotFoundPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface NotFoundPageProps {
 className?: string
} ;

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls['not-found-page'], {}, [className])}>{t('Страница не найдена')}</div>
    )
}
