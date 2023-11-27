import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button'
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/ui/Button'
import { Input } from 'shared/ui/Input'

import cls from './AuthForm.module.scss'

interface AuthFormProps {
  className?: string
}

export const AuthForm: FC<AuthFormProps> = ({ className }) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls['auth-form'], {}, [className])}>
            <Input className={cls.input} placeholder={t('Имя')} autoFocus/>
            <Input className={cls.input} placeholder={t('Пароль')}/>
            <Button
                className={cls['login-btn']}
                theme={ButtonTheme.OUTLINE}
                size={ButtonSize.M}
            >
                {t('Войти')}
            </Button>
        </div>
    )
}
