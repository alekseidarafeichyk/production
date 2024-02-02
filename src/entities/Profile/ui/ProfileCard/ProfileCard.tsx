import { type FC, useEffect } from 'react'
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData'
import { fetchProfileData } from 'entities/Profile/model/services/fetchProfileData/fetchProfileData'
// import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError'
// import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/ui/Button'
import { Input } from 'shared/ui/Input'

import cls from './ProfileCard.module.scss'

export const ProfileCard: FC = () => {
    const { t } = useTranslation('profile')
    const data = useSelector(getProfileData)
    // const isLoading = useSelector(getProfileIsLoading)
    // const error = useSelector(getProfileError)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [])

    return (
        <div className={cls.wrapper}>
            <div className={cls.header}>
                {t('Профиль')}
                <Button theme={ButtonTheme.OUTLINE} className={cls['edit-btn']}>
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    className={cls.input}
                    placeholder={t('Имя')}
                    value={data?.first}
                />
                <Input
                    className={cls.input}
                    value={data?.lastname}
                    placeholder={t('Фамилия')}
                />
            </div>
        </div>
    )
}
