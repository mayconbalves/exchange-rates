import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { useToast } from '~/contexts/useToast'
import { fetchRates } from '~/services/rates'
import Home from '.'

jest.mock('~/services/rates')
jest.mock('~/contexts/useToast')

const mockRates = [
  { moeda: 'USD', valor: 1.12, horario: '2024-11-09T12:00:00Z' },
  { moeda: 'GBP', valor: 0.89, horario: '2024-11-09T12:00:00Z' }
]

describe('Home Component', () => {
  const mockFetchRates = fetchRates as jest.Mock
  const mockShowToast = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
    ;(useToast as jest.Mock).mockReturnValue({ showToast: mockShowToast })
  })

  it('should handle errors and show toast notification if data fetching fails', async () => {
    mockFetchRates.mockRejectedValue(new Error('Error fetching rates'))

    render(<Home />)

    await waitFor(() => {
      expect(mockShowToast).toHaveBeenCalledWith('Erro ao carregar registros.', 'error')
    })
  })

  it('should fetch new data when the refresh button is clicked', async () => {
    mockFetchRates.mockResolvedValue(mockRates)

    render(<Home />)

    await waitFor(() => expect(mockFetchRates).toHaveBeenCalledTimes(1))

    fireEvent.click(screen.getByRole('button', { name: /atualizar/i }))

    await waitFor(() => expect(mockFetchRates).toHaveBeenCalledTimes(2))
  })

  it('Should be create snapshot', () => {
    const { container } = render(<Home />)

    expect(container).toMatchSnapshot()
  })
})
