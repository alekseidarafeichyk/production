import { Button } from 'shared/ui/Button'

import { render, screen } from '@testing-library/react'

describe('Button render', () => {
    test('test render', () => {
        render(<Button>Test</Button>)
        expect(screen.getByText('Test')).toBeInTheDocument()
    })

    test('to have className', () => {
        render(<Button>Test</Button>)
        expect(screen.getByText('Test')).toHaveClass('clear')
    })
})
