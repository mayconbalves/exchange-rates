export type RateItem = {
  date: string
  rate: string
  value: number
  timestamp: number
}

export type ApiResponse = {
  success: boolean
  timestamp: number
  base: string
  date: string
  rates: Record<string, number>
}
