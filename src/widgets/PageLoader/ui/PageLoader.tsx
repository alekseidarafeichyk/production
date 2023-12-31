import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Loader } from 'shared/ui/Loader'

import cls from './PageLoader.module.scss'

interface PageLoaderProps {
    className?: string
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
    return (
        <div className={classNames(cls['page-loader'], {}, [className])}>
            <Loader/>
        </div>
    )
}
