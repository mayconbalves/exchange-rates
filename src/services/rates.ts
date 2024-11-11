import axios from 'axios'
import { logError } from '~/utils/logError'
import { ApiResponse, RateItem } from './types'

const API_URL = 'https://api.exchangeratesapi.io/v1/latest'

export const fetchRates = async () => {
  try {
    const response = await axios.get<ApiResponse>(API_URL, {
      params: {
        access_key: '02b8b5234e798123853a457bcfa10514'
      }
    })

    const data = response.data

    if (data.success) {
      const ratesArray: RateItem[] = Object.entries(data.rates).map(([rate, value]) => ({
        rate,
        value,
        date: data.date,
        timestamp: data.timestamp
      }))

      return ratesArray
    } else {
      logError('Erro ao carregar as taxas de câmbio: Resposta não bem-sucedida', data)
      return []
    }
  } catch (error) {
    logError('Erro ao carregar as taxas de câmbio:', error)
    return []
  }
}
