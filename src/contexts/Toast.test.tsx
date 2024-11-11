import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { ToastProvider, useToast } from './useToast'

const TestComponent = () => {
  const { showToast } = useToast()

  return <button onClick={() => showToast('Test success message', 'success')}>Show Toast</button>
}

describe('ToastContext', () => {
  test('Should be show toast', async () => {
    render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    )

    const button = screen.getByText('Show Toast')
    fireEvent.click(button)

    const toast = await screen.findByText('Test success message')
    expect(toast).toBeInTheDocument()

    expect(toast).toHaveStyle('background-color: green')

    await waitFor(() => expect(toast).not.toBeInTheDocument(), { timeout: 3500 })
  })
})
