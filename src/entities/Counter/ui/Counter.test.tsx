import { screen } from '@testing-library/react'
import { renderComponent } from 'shared/lib/tests/renderComponent'
import { Counter } from './Counter'

describe('Counter', () => {
    test('test render', () => {
        renderComponent(<Counter />, {
            initialState: { counter: { value: 10 } },
        })
        expect(screen.getByTestId('value-title')).toHaveTextContent('10')
    })
})
