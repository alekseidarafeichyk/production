import { type FC, useCallback } from 'react'
import { authActions } from 'features/AuthByUserName/index'
import { getAuthState } from 'features/AuthByUserName/model/selectors/getAuthState/getAuthState'
import { authByUserNameThunk } from 'features/AuthByUserName/model/services/authByUserName'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import i18n from 'shared/config/i18n/i18n'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button'
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/ui/Button'
import { Input } from 'shared/ui/Input'
import { Text, TextTheme } from 'shared/ui/Text'

import cls from './AuthForm.module.scss'

interface AuthFormProps {
  className?: string
}

export const AuthForm: FC<AuthFormProps> = ({ className }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch<any>()
    const { username, password, error } = useSelector(getAuthState)

    const onLoginChange = useCallback((value: string): void => {
        dispatch(authActions.setUsername(value))
    }, [dispatch])

    const onPasswordChange = useCallback((value: string): void => {
        dispatch(authActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback((): void => {
        dispatch(authByUserNameThunk({ username, password }))
    }, [dispatch, password, username])

    return (
        <div className={classNames(cls['auth-form'], {}, [className])}>

            {error && <Text description={i18n.t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR}/>}
            <Input
                className={cls.input}
                placeholder={t('Имя')}
                autoFocus
                value={username}
                onChange={onLoginChange}
            />
            <Input
                className={cls.input}
                placeholder={t('Пароль')}
                value={password}
                onChange={onPasswordChange}
            />
            <Button
                className={cls['login-btn']}
                theme={ButtonTheme.OUTLINE}
                size={ButtonSize.M}
                onClick={onLoginClick}
            >
                {t('Войти')}
            </Button>
        </div>
    )
}
