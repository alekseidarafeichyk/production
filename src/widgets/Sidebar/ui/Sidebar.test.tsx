import { renderComponent } from 'shared/lib/tests/renderComponent'
import { Sidebar } from 'widgets/Sidebar'

import { fireEvent, screen } from '@testing-library/react'

describe('Sidebar', () => {
    test('sidebar render', () => {
        renderComponent(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('test toggle', () => {
        renderComponent(<Sidebar />)
        const toggleButton = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleButton)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
