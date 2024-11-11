import axios from 'axios'
import { logError } from '~/utils/logError'
import { fetchRates } from './rates'

jest.mock('axios')
jest.mock('~/utils/logError')

describe('fetchRates Service', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should call logError when the API call fails', async () => {
    const mockError = new Error('Network error')
    mockedAxios.get.mockRejectedValue(mockError)

    const rates = await fetchRates()

    expect(rates).toStrictEqual([])
    expect(logError).toHaveBeenCalledWith('Erro ao carregar as taxas de câmbio:', mockError)
  })

  it('should handle empty response data gracefully', async () => {
    const mockResponseData = {}

    mockedAxios.get.mockResolvedValue({ data: mockResponseData })

    const rates = await fetchRates()

    expect(rates).toEqual([])
  })
})
