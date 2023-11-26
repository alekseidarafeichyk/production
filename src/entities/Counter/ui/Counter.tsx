import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { type FC } from 'react'
import { Button } from 'shared/ui/Button'
import { counterActions } from '../model/slice/counterSlice'

export const Counter: FC = () => {
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)
    const { t } = useTranslation()

    const increment = (): void => {
        dispatch(counterActions.increment())
    }

    const decrement = (): void => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                onClick={increment}
                data-testid="increment-btn"
            >
                {t('increment')}
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={decrement}
            >
                {t('decrement')}
            </Button>
        </div>
    )
}
