import { type FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import i18n from 'shared/config/i18n/i18n'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader'
import { Button } from 'shared/ui/Button'
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/ui/Button'
import { Input } from 'shared/ui/Input'
import { Text, TextTheme } from 'shared/ui/Text'

import { getAuthError } from '../../model/selectors/getAuthError/getAuthError'
import { getAuthPassword } from '../../model/selectors/getAuthPassword/getAuthPassword'
import { getAuthUserName } from '../../model/selectors/getAuthUserName/getAuthUserName'
import { authByUserNameThunk } from '../../model/services/authByUserName'
import { authActions, authReducer } from '../../model/slice/authSlice'

import cls from './AuthForm.module.scss'

interface AuthFormProps {
  className?: string
}

const initReducers: ReducersList = {
    auth: authReducer
}

const AuthForm: FC<AuthFormProps> = ({ className }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch<any>()
    const username = useSelector(getAuthUserName)
    const password = useSelector(getAuthPassword)
    const error = useSelector(getAuthError)

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
        <DynamicModuleLoader reducers={initReducers}>
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
        </DynamicModuleLoader>
    )
}

export default AuthForm
