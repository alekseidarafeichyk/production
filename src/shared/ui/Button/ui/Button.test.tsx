import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button';

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