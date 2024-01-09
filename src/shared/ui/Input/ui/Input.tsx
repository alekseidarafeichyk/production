import { type ChangeEvent, type InputHTMLAttributes, memo, useCallback, useEffect, useRef, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Input.module.scss'

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>

interface InputProps extends HtmlInputProps {
    className?: string
    onChange?: (value: string) => void
    value?: string
    autofocus?: boolean
}

export const Input = memo(
    (
        {
            className,
            onChange,
            value,
            autofocus = false,
            placeholder,
            type = 'text',
            ...otherProps
        }: InputProps
    ) => {
        const [isFocused, setIsFocused] = useState(false)
        const [caretPosition, setCaretPosition] = useState(0)

        useEffect(() => {
            if (autofocus) {
                setIsFocused(true)
                inputRef.current.focus()
            }
        }, [autofocus])

        const inputRef = useRef<HTMLInputElement>(null)

        const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
            onChange?.(e.target.value)
            setCaretPosition(e.target.value.length)
        }, [onChange])

        const onChangeFocus = (): void => {
            setIsFocused(prev => !prev)
        }

        return (
            <div className={classNames(cls.wrapper, {}, [className])}>
                {placeholder && (
                    <span className={cls.placeholder}>{placeholder}</span>
                )}
                <div className={cls['field-wrapper']}>
                    <input
                        ref={inputRef}
                        className={cls.input}
                        type={type}
                        onChange={onChangeHandler}
                        value={value}
                        onFocus={onChangeFocus}
                        onBlur={onChangeFocus}
                        {...otherProps}
                    />
                    {isFocused && (
                        <span
                            className={cls.caret}
                            style={{ left: `${caretPosition * 6.7}px` }}
                        />
                    )}
                </div>
            </div>
        )
    }
)
