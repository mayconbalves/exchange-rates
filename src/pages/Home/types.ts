export type RateItem = {
  rate: string
  value: number
  date: string
  timestamp: number
}

export type ApiResponse = {
  BRL: number
  [key: string]: number
}
